import { Injectable } from "@angular/core";
/**
 * General purpose propery binding registry
 */
@Injectable()
export class PropertyBindingRegistry {

  private bindings: { [key: string]: PropertyBindings } = {};

  getPropertyBindings(type: PropertyBindingTypes): PropertyBindings {
    this.bindings[type] = this.bindings[type] || new PropertyBindings();
    return this.bindings[type];
  }

  getPropertyBindingsVisibility() {
    return this.getPropertyBindings(PropertyBindingTypes.visibility);
  }
}

/**
 * Defines the types of supported property bindings.<br/>
 * For now only <code>visibility</code> is supported.<br/>
 */
export enum PropertyBindingTypes {
  visibility
}

/**
 * Storage that holds all bindings that are property paths related.<br/>
 */
export class PropertyBindings {
  sourcesIndex: SimplePropertyIndexer = new SimplePropertyIndexer();
  dependenciesIndex: SimplePropertyIndexer = new SimplePropertyIndexer();

  add(dependencyPath: string, sourcePropertyPath: string) {
    this.sourcesIndex.store(sourcePropertyPath, dependencyPath);
    this.dependenciesIndex.store(dependencyPath, sourcePropertyPath);
  }

  findByDependencyPath(dependencyPath: string): string[] {
    const result = this.dependenciesIndex.find(dependencyPath);
    result.results = result.results || [];
    let values = [];
    for (const res of result.results) {
      values = values.concat(Object.keys(res.value));
    }
    return result.found ? values : [];
  }

  getBySourcePropertyPath(sourcePropertyPath: string): string[] {
    const result = this.sourcesIndex.find(sourcePropertyPath);
    result.results = result.results || [];
    let values = [];
    for (const res of result.results) {
      values = values.concat(Object.keys(res.value));
    }
    return result.found ? values : [];
  }

  createPathIndex(path: string): string[] {
    return path.split('/');
  }
}

/**
 * Simple indexer to store property paths
 */
export class SimplePropertyIndexer {

  static MARKER = '$____value';
  index: object = {};
  findOnlyWithValue = true;

  private _createPathIndex(path: string) {
    return path
      .replace(new RegExp('//', 'g'), '/')
      .replace(new RegExp('^/', 'g'), '')
      .split('/').filter(item => item);
  }

  store(propertyPath: string, value?: any) {
    this._storeIndex(this._createPathIndex(propertyPath), value);
  }

  private _storeIndex(pathIndex: string[], value?: string) {
    let indexPos = this.index;
    for (const key of pathIndex) {
      indexPos[key] = indexPos[key] || {};
      indexPos = indexPos[key];
    }
    if (indexPos && value) {
      indexPos[SimplePropertyIndexer.MARKER] = indexPos[SimplePropertyIndexer.MARKER] || {};
      indexPos[SimplePropertyIndexer.MARKER][value] = value;
    }
  }

  /**
   * Find path in index.<br/>
   * Will find path like:<br/>
   * <ul>
   *     <li>/property/0/prop</li>
   *     <li>/property/0/prop/2/test</li>
   *     <li>/property/0/prop/&#42;/test</li>
   *     <li>/property/&#42;/prop/1/test</li>
   *     <li>/property/&#42;/prop/&#42;/test</li>
   *     <li>/property/1/prop/&#42;/test</li>
   *  </ul>
   * @param path
   */
  find(path: string): IndexerResult {
    return this._findInIndex(this._createPathIndex(path));
  }

  _findInIndex(path: string[]): IndexerResult {
    const ixRes: IndexerResult = {target: path, found: false, results: []};
    this.__findIndex(ixRes, path, this.index, []);
    return ixRes;
  }

  __findIndex(indexerResults: IndexerResult, path: string[], index: object, parent?: string[]) {

    const p = parent || [];
    const segment = path[0];
    const wild = ('*' === segment) ? Object.keys(index) : [];
    const _keys = ((Array.isArray(segment) ? segment : [segment]) as string[]).concat(wild);
    const keys = _keys.filter((item, pos) => '*' !== item && _keys.indexOf(item) === pos); // remove duplicates

    if (index['*']) {
      keys.push('*');
    }

    let paths = [];
    for (const key of keys) {
      const restPath = path.slice(1);
      const restIndex = index[key];
      const restParent = p.concat(key);

      if (path.length === 1) {// collect only the full paths
        if (!this.findOnlyWithValue || (restIndex && restIndex[SimplePropertyIndexer.MARKER])) {
          indexerResults.results = indexerResults.results || [];
          indexerResults.results.push({
            path: restParent,
            value: restIndex[SimplePropertyIndexer.MARKER]
          });
          paths.push(restParent);
          indexerResults.found = indexerResults.results.length > 0;
        }
      }

      if (!restPath || !restPath.length || !restIndex) {
        break;
      }
      const restPaths = this.__findIndex(indexerResults, restPath, restIndex, restParent);

      paths = paths.concat(restPaths);
    }
    return paths;
  }

}

export interface IndexerResult {
  /**
   * The path originally searched for
   */
  target: string[];
  /**
   * Flag for the status of found or not found.<br/>
   * Usually <code>results</code> will be empty if no matches found.
   */
  found: boolean;
  /**
   * The result path and values from the index search.<br/>
   * Usually <code>results</code> will be empty if no matches found.
   */
  results: {
    /**
     * The path that matched the <code>target</code>
     * separated in segments
     */
    path: string[],
    /**
     * The value stored at the <code>path</code>
     */
    value: any
  }[];
}
