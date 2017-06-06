import {
  Component,
  ComponentRef,
  ChangeDetectorRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TerminatorService } from './terminator.service';
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
  private ref: ComponentRef<any>;

  constructor(
    private widgetFactory: WidgetFactory = null,
    private cdr: ChangeDetectorRef,
    private terminator: TerminatorService,
  ) { }

  ngOnInit() {
    this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    })
  }

  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
    this.widgetInstanciated.emit(this.ref.instance);
    this.widgetInstance = this.ref.instance;
    this.cdr.detectChanges();
  }
}
