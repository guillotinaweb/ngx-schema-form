import {BehaviorSubject, combineLatest} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

import {SchemaValidatorFactory} from '../schemavalidatorfactory';
import {ValidatorRegistry} from './validatorregistry';
import {PropertyBindingRegistry} from '../property-binding-registry';

export abstract class FormProperty {
  public schemaValidator: Function;

  _value: any = null;
  _errors: any = null;
  private _valueChanges = new BehaviorSubject<any>(null);
  private _errorsChanges = new BehaviorSubject<any>(null);
  private _visible = true;
  private _visibilityChanges = new BehaviorSubject<boolean>(true);
  private _root: PropertyGroup;
  private _parent: PropertyGroup;
  private _path: string;
  _propertyBindingRegistry: PropertyBindingRegistry;
  _canonicalPath: string;

  constructor(schemaValidatorFactory: SchemaValidatorFactory,
              private validatorRegistry: ValidatorRegistry,
              public schema: any,
              parent: PropertyGroup,
              path: string) {
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);

    this._parent = parent;
    if (parent) {
      this._root = parent.root;
    } else if (this instanceof PropertyGroup) {
      this._root = <PropertyGroup><any>this;
    }
    this._path = path;
  }

  public get valueChanges() {
    return this._valueChanges;
  }

  public get errorsChanges() {
    return this._errorsChanges;
  }

  public get type(): string {
    return this.schema.type;
  }

  public get parent(): PropertyGroup {
    return this._parent;
  }

  public get root(): PropertyGroup {
    return this._root || <PropertyGroup><any>this;
  }

  public get path(): string {
    return this._path;
  }

  public get value() {
    return this._value;
  }

  public get visible() {
    return this._visible;
  }

  public get valid() {
    return this._errors === null;
  }

  public abstract setValue(value: any, onlySelf: boolean);

  public abstract reset(value: any, onlySelf: boolean);

  public updateValueAndValidity(onlySelf = false, emitEvent = true) {
    this._updateValue();

    if (emitEvent) {
      this.valueChanges.next(this.value);
    }

    this._runValidation();

    if (this.parent && !onlySelf) {
      this.parent.updateValueAndValidity(onlySelf, emitEvent);
    }

  }

  /**
   * @internal
   */
  public abstract _hasValue(): boolean;

  /**
   *  @internal
   */
  public abstract _updateValue();

  /**
   * @internal
   */
  public _runValidation(): any {
    let errors = this.schemaValidator(this._value) || [];
    let customValidator = this.validatorRegistry.get(this.path);
    if (customValidator) {
      let customErrors = customValidator(this.value, this, this.findRoot());
      errors = this.mergeErrors(errors, customErrors);
    }
    if (errors.length === 0) {
      errors = null;
    }

    this._errors = errors;
    this.setErrors(this._errors);
  }

  private mergeErrors(errors, newErrors) {
    if (newErrors) {
      if (Array.isArray(newErrors)) {
        errors = errors.concat(...newErrors);
      } else {
        errors.push(newErrors);
      }
    }
    return errors;
  }

  private setErrors(errors) {
    this._errors = errors;
    this._errorsChanges.next(errors);
  }

  public extendErrors(errors) {
    errors = this.mergeErrors(this._errors || [], errors);
    this.setErrors(errors);
  }

  searchProperty(path: string): FormProperty {
    let prop: FormProperty = this;
    let base: PropertyGroup = null;

    let result = null;
    if (path[0] === '/') {
      base = this.findRoot();
      result = base.getProperty(path.substr(1));
    } else {
      while (result === null && prop.parent !== null) {
        prop = base = prop.parent;
        result = base.getProperty(path);
      }
    }
    return result;
  }

  public findRoot(): PropertyGroup {
    let property: FormProperty = this;
    while (property.parent !== null) {
      property = property.parent;
    }
    return <PropertyGroup>property;
  }

  private setVisible(visible: boolean) {
    this._visible = visible;
    this._visibilityChanges.next(visible);
    this.updateValueAndValidity();
    if (this.parent) {
      this.parent.updateValueAndValidity(false, true);
    }
  }

  private __bindVisibility(): boolean {
    /**
     * <pre>
     *     "oneOf":[{
     *         "path":["value","value"]
     *     },{
     *         "path":["value","value"]
     *     }]
     *     </pre>
     * <pre>
     *     "allOf":[{
     *         "path":["value","value"]
     *     },{
     *         "path":["value","value"]
     *     }]
     *     </pre>
     */
    const visibleIfProperty = this.schema.visibleIf;
    const visibleIfOf = (visibleIfProperty || {}).oneOf || (visibleIfProperty || {}).allOf;
    if (visibleIfOf) {
      for (const visibleIf of visibleIfOf) {
        if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
          this.setVisible(false);
        } else if (visibleIf !== undefined) {
          const propertiesBinding = [];
          for (const dependencyPath in visibleIf) {
            if (visibleIf.hasOwnProperty(dependencyPath)) {
              const properties = this.findProperties(this, dependencyPath);
              if ((properties || []).length) {
                for (const property of properties) {
                  if (property) {
                    let valueCheck;
                    if (this.schema.visibleIf.oneOf) {
                      valueCheck = property.valueChanges.pipe(map(
                        value => {
                          if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                            return value.length > 0;
                          } else {
                            return visibleIf[dependencyPath].indexOf(value) !== -1;
                          }
                        }
                      ));
                    } else if (this.schema.visibleIf.allOf) {
                      const _chk = (value) => {
                        for (const item of this.schema.visibleIf.allOf) {
                          for (const depPath of Object.keys(item)) {
                            const prop = this.searchProperty(depPath);
                            const propVal = prop._value;
                            let valid = false;
                            if (item[depPath].indexOf('$ANY$') !== -1) {
                              valid = propVal.length > 0;
                            } else {
                              valid = item[depPath].indexOf(propVal) !== -1;
                            }
                            if (!valid) {
                              return false;
                            }
                          }
                        }
                        return true;
                      };
                      valueCheck = property.valueChanges.pipe(map(_chk));
                    }
                    const visibilityCheck = property._visibilityChanges;
                    const and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
                    propertiesBinding.push(and);
                  }
                }
              } else {
                console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this.path);
                this.registerMissingVisibilityBinding(dependencyPath, this);
                // not visible if not existent
                this.setVisible(false);
              }
            }
          }

          combineLatest(propertiesBinding, (...values: boolean[]) => {
            return values.indexOf(true) !== -1;
          }).pipe(distinctUntilChanged()).subscribe((visible) => {
            this.setVisible(visible);
          });
        }
      }
      return true;
    }
  }

  // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
  public _bindVisibility() {
    if (this.__bindVisibility())
      return;
    let visibleIf = this.schema.visibleIf;
    if (typeof visibleIf === 'object' && Object.keys(visibleIf).length === 0) {
      this.setVisible(false);
    } else if (visibleIf !== undefined) {
      let propertiesBinding = [];
      for (let dependencyPath in visibleIf) {
        if (visibleIf.hasOwnProperty(dependencyPath)) {
          const properties = this.findProperties(this, dependencyPath);
          if ((properties || []).length) {
            for (const property of properties) {
              if (property) {
                const valueCheck = property.valueChanges.pipe(map(
                  value => {
                    if (visibleIf[dependencyPath].indexOf('$ANY$') !== -1) {
                      return value.length > 0;
                    } else {
                      return visibleIf[dependencyPath].indexOf(value) !== -1;
                    }
                  }
                ));
                const visibilityCheck = property._visibilityChanges;
                const and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
                propertiesBinding.push(and);
              }
            }
          } else {
            console.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this.path);
            this.registerMissingVisibilityBinding(dependencyPath, this);
            // not visible if not existent
            this.setVisible(false);
          }
        }
      }

      combineLatest(propertiesBinding, (...values: boolean[]) => {
        return values.indexOf(true) !== -1;
      }).pipe(distinctUntilChanged()).subscribe((visible) => {
        this.setVisible(visible);
      });
    }
  }

  private registerMissingVisibilityBinding(dependencyPath: string, formProperty: FormProperty) {
    formProperty._propertyBindingRegistry.getPropertyBindingsVisibility().add(dependencyPath, formProperty.path);
  }


  /**
   * Finds all <code>formProperties</code> from a path with wildcards.<br/>
   * e.g: <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * @param target
   * @param propertyPath
   */
  findProperties(target: FormProperty, propertyPath: string): FormProperty[] {
    const props: FormProperty[] = [];
    const paths = this.findPropertyPaths(target, propertyPath);
    for (const path of paths) {
      const p: FormProperty = target.searchProperty(path);
      if (p) {
        props.push(p);
      }
    }
    return props;
  }

  /**
   * Creates canonical paths from a path with wildcards.
   * e.g:<br/>
   * From:<br/>
   * <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * it creates:<br/>
   * <code>/garage/cars/0/tires/0/name</code><br/>
   * <code>/garage/cars/0/tires/1/name</code><br/>
   * <code>/garage/cars/0/tires/2/name</code><br/>
   * <code>/garage/cars/0/tires/3/name</code><br/>
   * <code>/garage/cars/1/tires/0/name</code><br/>
   * <code>/garage/cars/2/tires/1/name</code><br/>
   * <code>/garage/cars/3/tires/2/name</code><br/>
   * <code>/garage/cars/3/tires/3/name</code><br/>
   * <code>/garage/cars/&#42;/tires/&#42;/name</code><br/>
   * <code>/garage/cars/&#42;/tires/2/name</code><br/>
   * <code>/garage/cars/&#42;/tires/3/name</code><br/>
   * <br/>etc...
   * @param target
   * @param path
   * @param parentPath
   */
  findPropertyPaths(target: FormProperty, path: string, parentPath?: string): string[] {
    const ix = path.indexOf('*');
    if (-1 !== ix) {
      const prePath = ix > -1 ? path.substring(0, ix - 1) : path;
      const subPath = ix > -1 ? path.substring(ix + 1) : path;
      const prop: FormProperty = target.searchProperty(prePath);
      let pathFound = [];
      if (prop instanceof PropertyGroup) {
        const arrProp = prop.properties as FormProperty[];
        for (let i = 0; i < arrProp.length; i++) {
          const curreItemPath = (parentPath || '') + prePath + (prePath.endsWith('/') ? '' : '/') + i + subPath;
          const curreItemPrePath = (parentPath || '') + prePath + i;
          if (-1 === curreItemPath.indexOf('*')) {
            pathFound.push(curreItemPath);
          }
          const childrenPathFound = this.findPropertyPaths(arrProp[i], subPath, curreItemPrePath);
          pathFound = pathFound.concat(childrenPathFound);
        }
      }
      return pathFound;
    }
    return [path];
  }
}

export abstract class PropertyGroup extends FormProperty {

  _properties: FormProperty[] | { [key: string]: FormProperty } = null;

  get properties() {
    return this._properties;
  }

  set properties(properties: FormProperty[] | { [key: string]: FormProperty }) {
    /**
     * Override the setter to add an observer that notices when an item is added or removed.<br/>
     */
    this._properties = new Proxy(properties, this._propertyProxyHandler);
  }

  private _propertyProxyHandler: ProxyHandler<FormProperty[] | { [key: string]: FormProperty }> = {
    /**
     * When a new item is added it will be checked for visibility updates to proceed <br/>
     * if any other field has a binding reference to it.<br/>
     */
    set(target: FormProperty[] | { [p: string]: FormProperty }, p: PropertyKey, value: any, receiver: any): boolean {

      /**
       * 1) Make sure a canonical path is set
       */
      const assertCanonicalPath = (propertyValue: any) => {
        const formProperty = propertyValue as FormProperty;
        if (Array.isArray(target) && propertyValue instanceof FormProperty) {
          /**
           * Create a canonical path replacing the last '*' with the elements position in array
           * @param propertyPath
           * @param indexOfChild
           */
          const getCanonicalPath = (propertyPath: string, indexOfChild: number) => {
            let pos;
            if (propertyPath && -1 !== (pos = propertyPath.lastIndexOf('*'))) {
              return propertyPath.substring(0, pos) + indexOfChild.toString() + propertyPath.substring(pos + 1);
            }
          };
          if (formProperty) {
            formProperty._canonicalPath = getCanonicalPath(formProperty._canonicalPath, p as number);
          }
        }

        const propertyGroup = formProperty as PropertyGroup;
        const propertyGroupChildren = (Array.isArray(propertyGroup.properties) ?
          propertyGroup.properties :
          Object.values(propertyGroup.properties || {})) as FormProperty[];
        if ((formProperty.path || '').endsWith('/*')) {
          /**
           * If it is an array, then all children canonical paths must be computed now.
           * The children don't have the parent's path segment set yet,
           * because they are created before the parent gets attached to its parent.
           */
          for (const child of propertyGroupChildren) {
            child._canonicalPath = formProperty._canonicalPath + child._canonicalPath.substring(formProperty.path.length);
          }
        }
        return {property: formProperty, children: propertyGroupChildren};
      };
      const {property, children} = assertCanonicalPath(value);

      /**
       * 2) Add the new property before rebinding, so it can be found by <code>_bindVisibility</code>
       */
      const result = target[p as string] = value;

      /**
       * 3) Re-bind the visibility bindings referencing to this canonical paths
       */
      const rebindVisibility = () => {
        const rebindAll = [property].concat(children);
        const findPropertiesToRebind = (formProperty: FormProperty) => {
          const propertyBindings = formProperty._propertyBindingRegistry.getPropertyBindingsVisibility();
          let rebind: string[] = [];
          if (formProperty._canonicalPath) {
            rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty._canonicalPath) || []));
            if (formProperty._canonicalPath.startsWith('/')) {
              rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty._canonicalPath.substring(1)) || []));
            }
          }
          rebind = rebind.concat(propertyBindings.findByDependencyPath(formProperty.path) || []);
          if (formProperty.path.startsWith('/')) {
            rebind = rebind.concat(rebind.concat(propertyBindings.findByDependencyPath(formProperty.path.substring(1)) || []));
          }
          const uniqueValues = {};
          for (const item of rebind) {
            uniqueValues[item] = item;
          }
          return Object.keys(uniqueValues);
        };
        for (const _property of rebindAll) {
          if (_property instanceof FormProperty) {
            try {
              const rebindPaths = findPropertiesToRebind(_property);
              for (const rebindPropPath of rebindPaths) {
                const rebindProp = _property.searchProperty(rebindPropPath);
                rebindProp._bindVisibility();
              }
            } catch (e) {
              console.error('Rebinding visibility error at path:', _property.path, 'property:', _property, e);
            }
          }
        }
      };
      rebindVisibility();

      return result;
    },
    get(target: FormProperty[] | { [p: string]: FormProperty }, p: PropertyKey, receiver: any): any {
      return target[p as string];
    },
    deleteProperty(target: FormProperty[] | { [p: string]: FormProperty }, p: PropertyKey): boolean {
      return delete target[p as string];
    }
  };

  getProperty(path: string) {
    let subPathIdx = path.indexOf('/');
    let propertyId = subPathIdx !== -1 ? path.substr(0, subPathIdx) : path;

    let property = this.properties[propertyId];
    if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
      let subPath = path.substr(subPathIdx + 1);
      property = (<PropertyGroup>property).getProperty(subPath);
    }
    return property;
  }

  public forEachChild(fn: (formProperty: FormProperty, str: String) => void) {
    for (let propertyId in this.properties) {
      if (this.properties.hasOwnProperty(propertyId)) {
        let property = this.properties[propertyId];
        fn(property, propertyId);
      }
    }
  }

  public forEachChildRecursive(fn: (formProperty: FormProperty) => void) {
    this.forEachChild((child) => {
      fn(child);
      if (child instanceof PropertyGroup) {
        (<PropertyGroup>child).forEachChildRecursive(fn);
      }
    });
  }

  public _bindVisibility() {
    super._bindVisibility();
    this._bindVisibilityRecursive();
  }

  private _bindVisibilityRecursive() {
    this.forEachChildRecursive((property) => {
      property._bindVisibility();
    });
  }

  public isRoot() {
    return this === this.root;
  }
}


