import {
  Component,
  ComponentRef,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {Subscription} from 'rxjs';
import {WidgetFactory} from "./widgetfactory";
import {TerminatorService} from "./terminator.service";

@Component({
  selector: 'sf-form-element-action',
  template: '<ng-template #target></ng-template>',
  standalone: false
})
export class FormElementComponentAction implements OnInit, OnChanges, OnDestroy {
  private widgetFactory = inject(WidgetFactory) ?? null;
  private terminator = inject(TerminatorService);


  @Input()
  button: any;

  @Input()
  formProperty: any;

  @ViewChild('target', {read: ViewContainerRef, static: true}) container: ViewContainerRef;

  private ref: ComponentRef<any>;
  private subs: Subscription;

  ngOnInit() {
    this.subs = this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    });
  }

  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.button.widget || 'button');
    this.ref.instance.button = this.button;
    this.ref.instance.formProperty = this.formProperty;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
