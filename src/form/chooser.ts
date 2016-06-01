import {Component, DynamicComponentLoader, ViewContainerRef, Input} from '@angular/core';
import {FieldRegistry} from './registry';

import {DefaultField} from './fields/default';


@Component({
    selector: 'field',
    directives: FieldRegistry.getFields(),
    template: `<div></div>`
})
export class FieldChooser {
    dcl: DynamicComponentLoader;
    container: ViewContainerRef;
    instance: any;
    @Input('typename') typename: string;
    @Input('id') id: string;
    @Input('settings') settings: any;

    constructor(dcl: DynamicComponentLoader = null, container: ViewContainerRef = null) {
        if (!this.dcl && dcl) {
            this.dcl = dcl;
            this.container = container;
        }
    }

    ngOnInit() {
        var chooser = this;
        // TODO: find a way to use loadAsRoot instead of loadNextToLocation to
        // avoid useless markup
        var field = FieldRegistry.getField(chooser.typename);
        if(!field) {
            field = DefaultField;
        }
        chooser.dcl.loadNextToLocation(field, chooser.container).then(ref => {
            ref.instance.settings = chooser.settings;
            ref.instance.name = chooser.id;
            chooser.instance = ref.instance;
        });
    }
}