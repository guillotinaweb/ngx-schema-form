import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { WidgetFactory } from './widgetfactory';

@Component({
  selector: 'sf-widget-chooser',
  template: `<div #target></div>`,
})
export class WidgetChooserComponent implements OnChanges {

  @Input() widgetInfo: any;

  @Output() widgetInstanciated = new EventEmitter<any>();

  @ViewChild('target', {read: ViewContainerRef}) container: ViewContainerRef;

  private widgetInstance: any;


  constructor(private widgetFactory: WidgetFactory = null, private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    let ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
    this.widgetInstanciated.emit(ref.instance);
    this.widgetInstance = ref.instance;
    this.cdr.detectChanges();
  }
}
