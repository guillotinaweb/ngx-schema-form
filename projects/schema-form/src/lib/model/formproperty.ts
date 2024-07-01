import {BehaviorSubject, combineLatest, Observable, of} from 'rxjs';
import {distinctUntilChanged, map} from 'rxjs/operators';

import {SchemaValidatorFactory} from '../schemavalidatorfactory';
import {ValidatorRegistry} from './validatorregistry';
import {PropertyBindingRegistry} from '../property-binding-registry';
import { ExpressionCompilerFactory, ExpressionCompilerVisibilityIf } from '../expression-compiler-factory';
import { ISchema, TSchemaPropertyType } from './ISchema';
import { LogService } from '../log.service';
import { FieldType } from '../template-schema/field/field';
import { isEmptyObject } from './utils';

export abstract class FormProperty {
  public schemaValidator: Function;
  public expressionCompilerVisibiltyIf: ExpressionCompilerVisibilityIf;

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
  __canonicalPath: string;
  __canonicalPathNotation: string;

  /**
   * Provides the unique path of this form element.<br/>
   * E.g.:
   * <code>/garage/cars</code>,<br/>
   * <code>/shop/book/0/page/1/</code>
   */
  get _canonicalPath() { return this.__canonicalPath; }
  set _canonicalPath(canonicalPath: string) {
    this.__canonicalPath = canonicalPath;
    this.__canonicalPathNotation = (this.__canonicalPath||'')
      .replace(new RegExp('^/', 'ig'), '')
      .replace(new RegExp('/$', 'ig'), '')
      .replace(new RegExp('/', 'ig'), '.');
  }
  /**
   * Uses the unique path provided by the property <code>_canonicalPath</code><br/>
   * but converts it to a HTML Element Attribute ID compliant format.<br/>
   * E.g.:
   * <code>garage.cars</code>,<br/>
   * <code>shop.book.0.page.1.</code>
   */
  get canonicalPathNotation() { return this.__canonicalPathNotation; }

  private _rootName;
  /**
   * Provides the HTML Element Attribute ID/NAME compliant representation
   * of the root element.<br/>
   * Represents the HTML FORM NAME.<br/>
   * Only the root <code>FormProperty</code> will provide a value here.
   */
  get rootName() { return this._rootName; }

  constructor(schemaValidatorFactory: SchemaValidatorFactory,
              private validatorRegistry: ValidatorRegistry,
              expressionCompilerFactory: ExpressionCompilerFactory,
              public schema: ISchema,
              parent: PropertyGroup,
              path: string,
              protected logger: LogService) {
    this.schemaValidator = schemaValidatorFactory.createValidatorFn(this.schema);
    this.expressionCompilerVisibiltyIf = expressionCompilerFactory.createExpressionCompilerVisibilityIf();

    this._parent = parent;
    if (parent) {
      this._root = parent.root;
    } else if (this instanceof PropertyGroup) {
      this._root = <PropertyGroup><any>this;
      this._rootName = this.createRootName();
    }
    this._path = path;
  }

  /**
   * Creates the HTML ID and NAME attribute compliant string.
   */
  private createRootName(): string {
    if (this.schema && this.schema['name']) {
      return this._rootName = this.schema['name'].replace(new RegExp('[\\s]+', 'ig'), '_')
    }
    return '';
  }

  public get valueChanges() {
    return this._valueChanges;
  }

  public get errorsChanges() {
    return this._errorsChanges;
  }

  public get type(): TSchemaPropertyType {
    return this.schema.type;
  }

  public get isNullableType(): boolean {
    return Array.isArray(this.schema.type) && this.schema.type.some(type => type === FieldType.Null);
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

    // remove missing required property error if property is not visible
    for (let i = errors.length - 1; i >= 0; i -= 1) {
      const error = errors[i];
      if (error.code === "OBJECT_MISSING_REQUIRED_PROPERTY") {
        const requiredProperty = this.searchProperty(
          `${error.path.substring(1)}/${error.params.join("/")}`
        );
        if (requiredProperty?.visible === false) {
          errors.splice(i, 1);
        }
      }
    }

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
  }

  /**
   * Making use of the expression compiler for the <code>visibleIf</code> condition
   * @param sourceProperty The source property where the `visibleIf` condition is set.
   * @param targetProperty  The target property what provided the `value` on which the `visibleIf` condition will be checked against. May be `null` or `undefined`
   * @param dependencyPath The dependency path of the `targetProperty`
   * @param value The value of the `targetProperty` to check the `visiblityIf` condintion against. May be `null` or `undefined`
   * @param expression The value or expression to check against the `value` for the `targetProperty`. May be `null` or `undefined`
   */
  private __evaluateVisibilityIf(
    sourceProperty: FormProperty,
    targetProperty: FormProperty,
    dependencyPath: string,
    value: any = '',
    expression: string | string[] | number | number[] | boolean | boolean[]): boolean {
    try {
      let valid = false
      const expArray = Array.isArray(expression) ? expression : [expression]
      for (const expString of expArray) {
        if (typeof expString === 'boolean') {
          valid = !expString ? !value : value
        } else if (typeof expString === 'number') {
          valid = (!!value || value == 0) ? `${expString}` === `${value}` : false;
        } else if (-1 !== `${expString}`.indexOf('$ANY$')) {
          if(Array.isArray(value)) {
            valid = value.length > 0;
          } else if(typeof value === "number") {
            valid = true;
          } else if(typeof value === "boolean") {
            valid = true;
          } else if(typeof value === "string") {
            valid = value !== '';
          } else if(typeof value === "object") {
            valid = !isEmptyObject(value);
          }
        } else if (0 === `${expString}`.indexOf('$EXP$')) {
          const _expresssion = (expString as string).substring('$EXP$'.length);
          valid = true === this.expressionCompilerVisibiltyIf.evaluate(_expresssion, {
            source: sourceProperty,
            target: targetProperty
          })
        } else if (Array.isArray(value)) {
			    valid = value.some((val) => `${val}` === `${expString}`);
		    } else {
          valid = !!value ? `${expString}` === `${value}` : false;
        }
        if (valid) {
          break
        }
      }
      return valid
    } catch (error) {
      this.logger.error('Error processing "VisibileIf" expression for path: ', dependencyPath,
        `source - ${(sourceProperty ? sourceProperty._canonicalPath : '<no-sourceProperty>')}: `, sourceProperty,
        `target - ${(targetProperty ? targetProperty._canonicalPath : '<no-targetProperty>')}: `, targetProperty,
        'value:', value,
        'expression: ', expression,
        'error: ', error)
    }
  }

  /**
   * binds visibility conditions of type `oneOf` and `allOf`.
   * @returns `true` if any visibility binding of type `oneOf` or `allOf` has been processed. Otherwise `false`.
   */
  private __bindVisibility_oneOf_or_allOf(): boolean {
    /**
     * <pre>
     *     "oneOf":[{
     *         "path":["value","value"]
     *     },{
     *         "path":["value","value"]
     *     }]
     * </pre>
     * <pre>
     *     "allOf":[{
     *         "path":["value","value"]
     *     },{
     *         "path":["value","value"]
     *     }]
     * </pre>
     */
    // get the visibleIf property and check if it has a oneOf or allOf property
    const visibleIfProperty = this.schema.visibleIf;
    let oneOfOrAllOf;
    if (visibleIfProperty) {
      if (!!visibleIfProperty.oneOf) oneOfOrAllOf = visibleIfProperty.oneOf;
      else if (!!visibleIfProperty.allOf) oneOfOrAllOf = visibleIfProperty.allOf;
    }

    // oneOf or allOf is set so this method handles the binding
    if (visibleIfProperty && oneOfOrAllOf) {
      const finalObservable: Observable<boolean> = this.__bindConditionalVisiblityChain(oneOfOrAllOf, !!visibleIfProperty.oneOf, !!visibleIfProperty.allOf);
      // subscribe to the last observable which collects all temporary results
      finalObservable.pipe(distinctUntilChanged()).subscribe((visible) => {
        this.setVisible(visible);
      });
      return true;
    }

    // oneOf and allOf is not set. this method does not handle the logic
    return false;
  }

  /**
   * helper function to recursively bind visibilty in an arbitrary chain oneOf allOf chain
   * @param visbilityElement The element from the visibitly chain. Can be an array from e.g. {"oneOf": [...]} or an element with one property for the dependency path e.g. {"textField1": ...}
   * @param isOneOf Boolean to chain the oberservables as oneOf
   * @param isAllOf Boolean to chain the oberservables as allOf
   * @returns An Array with one
   */
  private __bindConditionalVisiblityChain(visbilityElement: any, isOneOf: boolean, isAllOf: boolean): Observable<boolean> {
    // all observables are added to this array, if the element is oneOf or allOf
    const visibiltyBindings: Array<Observable<boolean>> = [];

    // oneOf or allOf = visibiltyElement must be an array
    if (isOneOf || isAllOf) {
      for (const objInOf of visbilityElement) {
        // bind all elements recursively with the same function.
        // objInOf must be an object, which may contain allOf or oneOf again but this is checked by the recursive call to this method
        visibiltyBindings.push(this.__bindConditionalVisiblityChain(objInOf, false, false));
      }
      // visibiltyElement must be an obj, which may contain oneOf or allOf again
    } else {
      const containsOneOf = visbilityElement.hasOwnProperty("oneOf");
      const containsAllOf = visbilityElement.hasOwnProperty("allOf");

      let visibleIfOf: any = null;
      if (containsOneOf) visibleIfOf = visbilityElement.oneOf;
      else if (containsAllOf) visibleIfOf = visbilityElement.allOf;

      // if oneOf or allOf is present check if it is an array with at least 1 element
      if (visibleIfOf) {
        // empty arrays just return boolean false
        if (visibleIfOf.length == 0) return of(false);
        // recursive call if visbilityElement has oneOf or allOf in it
        return this.__bindConditionalVisiblityChain(visibleIfOf, containsOneOf, containsAllOf);
      } else {
        // it's a dependency path
        const observables = this.__handleDependencyPath(visbilityElement);
        return combineLatest(observables, (...values: boolean[]) => values.indexOf(true) !== -1);
      }
    }

    // combine all observables to one boolean by using logical and or logical or. eventually return the observable
    let ret;
    if (isAllOf) ret = combineLatest(visibiltyBindings, (...values: boolean[]) => values.indexOf(false) === -1);
    else if (isOneOf) ret = combineLatest(visibiltyBindings, (...values: boolean[]) => values.indexOf(true) !== -1);
    return ret;
  }

  /**
   * Handles a dependency path in a oneOf or allOf
   * @param dependencyElement An element / object which contains neither a field with oneOf or allOf as name. Handled as dependency path in json
   * @returns An oberservable boolean containing the evaluation of the statement, where the statement is the value of the dependency path field
   */
  private __handleDependencyPath(dependencyElement: any): Array<Observable<any>> {
    const dependencyPath = Object.keys(dependencyElement)[0];

    const propertiesBinding = [];
    const properties = this.findProperties(this, dependencyPath);
    if ((properties || []).length) {
      for (const property of properties) {
        if (property) {
          let valueCheck;
          const _chk = value => this.__evaluateVisibilityIf(this, property, dependencyPath, value, dependencyElement[dependencyPath]) ? true : false;

          valueCheck = property.valueChanges.pipe(map(_chk));
          const visibilityCheck = property._visibilityChanges;
          const and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
          propertiesBinding.push(and);
        }
      }
      return propertiesBinding;
    } else {
      this.logger.warn("Can't find property " + dependencyPath + " for visibility check of " + this.path);
      this.registerMissingVisibilityBinding(dependencyPath, this);
    }
    return [of(false)];
  }

  // A field is visible if AT LEAST ONE of the properties it depends on is visible AND has a value in the list
  public _bindVisibility() {
    if (this.__bindVisibility_oneOf_or_allOf())
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
                  value => this.__evaluateVisibilityIf(this, property, dependencyPath, value, visibleIf[dependencyPath])
                ));
                const visibilityCheck = property._visibilityChanges;
                const and = combineLatest([valueCheck, visibilityCheck], (v1, v2) => v1 && v2);
                propertiesBinding.push(and);
              }
            }
          } else {
            this.logger.warn('Can\'t find property ' + dependencyPath + ' for visibility check of ' + this.path);
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
  
  private _propertyProxyHandler = new ExtendedProxyHandler(this.logger)

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


export class ExtendedProxyHandler implements ProxyHandler<FormProperty[] | { [key: string]: FormProperty }> {
  constructor(private logger: LogService) { }
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

      const recalculateCanonicalPath = (formProperty: FormProperty) => {
        if (!(formProperty instanceof PropertyGroup))
          return
        const propertyGroup = formProperty as PropertyGroup;
        const propertyGroupChildren = (Array.isArray(propertyGroup.properties) ?
          propertyGroup.properties :
          Object.values(propertyGroup.properties || {})) as FormProperty[];
        if (propertyGroupChildren.length || (formProperty.path || '').endsWith('/*')) {
          /**
           * If it is an array, then all children canonical paths must be computed now.
           * The children don't have the parent's path segment set yet,
           * because they are created before the parent gets attached to its parent.
           */
          for (const child of propertyGroupChildren) {
            if (child.__canonicalPath.indexOf('*')) {
              const p_path = formProperty._canonicalPath.split('/')
              child._canonicalPath = p_path.concat(child._canonicalPath.split('/').splice(p_path.length)).join('/')
            }
            recalculateCanonicalPath(child)
          }
        }
      }
      recalculateCanonicalPath(formProperty)
      const propertyGroup = formProperty as PropertyGroup;
      const propertyGroupChildren = (Array.isArray(propertyGroup.properties) ?
      propertyGroup.properties :
      Object.values(propertyGroup.properties || {})) as FormProperty[];
      return { property: formProperty, children: propertyGroupChildren };
    };
    const { property, children } = assertCanonicalPath(value);

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
              if (!rebindProp) {
                this.logger.warn('Can\'t find property to rebind visibility at path:', _property.path, 'property:', _property);
              } else {
                rebindProp._bindVisibility();
              }
            }
          } catch (e) {
            this.logger.error('Rebinding visibility error at path:', _property.path, 'property:', _property, e);
          }
        }
      }
    };
    rebindVisibility();

    return result;
  }
  get(target: FormProperty[] | { [p: string]: FormProperty }, p: PropertyKey, receiver: any): any {
    return target[p as string];
  }
  deleteProperty(target: FormProperty[] | { [p: string]: FormProperty }, p: PropertyKey): boolean {
    return delete target[p as string];
  }
}
