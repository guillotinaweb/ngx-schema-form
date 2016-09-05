import  { FormProperty } from "./formproperty";

export abstract class PropertyGroup extends FormProperty {

	protected properties: FormProperty[] | {[key: string]: FormProperty} = null;

	getProperty(path: string) {
		let subPathIdx = path.indexOf("/");
		let propertyId = subPathIdx !== -1 ? path.substr(0,subPathIdx) : path ;

		let property = this.properties[propertyId];
		if (property !== null && subPathIdx !== -1 && property instanceof PropertyGroup) {
			let subPath = path.substr(subPathIdx+1);
			property = (<PropertyGroup>property).getProperty(subPath);
		}
		return property;
	}

	public forEachChild(fn: (FormProperty, string) => void) {
		for (let propertyId in this.properties) {
			let property = this.properties[propertyId]; 
			fn(property, propertyId);
		}
	}

	public forEachChildRecursive(fn: (FormProperty) => void) {
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

	private _bindVisibilityRecursive () {
		this.forEachChildRecursive((property) => {
			property._bindVisibility();
		});
	}

	public isRoot() {
		return this === this.root;
	}
}
