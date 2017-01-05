import {
  Component,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

import { WidgetFactory } from './widgetfactory';

@Component({
  selector: 'sf-widget-chooser',
  template: `<div #target></div>`,
})
export class WidgetChooserComponent implements OnInit {

  @Input() widgetInfo: any;

  @Output() widgetInstanciated = new EventEmitter<any>();

  @ViewChild('target', {read: ViewContainerRef}) private container: ViewContainerRef;

  private widgetInstance: any;


  constructor(private widgetFactory: WidgetFactory = null, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    let ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
    this.widgetInstanciated.emit(ref.instance);
    this.widgetInstance = ref.instance;
    this.cdr.detectChanges();
  }
}
