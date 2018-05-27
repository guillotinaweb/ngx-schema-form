import {Component, ComponentRef, Input, OnChanges, ViewChild, ViewContainerRef} from "@angular/core";
import {WidgetFactory} from "./widgetfactory";
import {TerminatorService} from "./terminator.service";

@Component({
  selector: 'sf-form-element-action',
  template: '<ng-template #target></ng-template>'
})
export class FormElementComponentAction implements OnChanges {

  @Input()
  button: any

  @Input()
  formProperty: any

  @ViewChild('target', {read: ViewContainerRef}) container: ViewContainerRef;

  private ref: ComponentRef<any>;

  constructor(private widgetFactory: WidgetFactory = null,
              private terminator: TerminatorService) {
  }

  ngOnInit() {
    this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    })
  }

  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
    this.ref.instance.button = this.button
    this.ref.instance.formProperty = this.formProperty
  }

}
