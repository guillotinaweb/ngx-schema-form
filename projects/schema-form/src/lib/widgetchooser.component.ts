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
  OnInit,
  OnDestroy
} from '@angular/core';
import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
import { Subscription } from 'rxjs';


@Component({
  selector: 'sf-widget-chooser',
  template: `<div #target></div>`,
})
export class WidgetChooserComponent implements OnInit, OnChanges, OnDestroy {

  @Input() widgetInfo: any;

  @Output() widgetInstanciated = new EventEmitter<any>();

  @ViewChild('target', { read: ViewContainerRef, static: true }) container: ViewContainerRef;

  private widgetInstance: any;
  private ref: ComponentRef<any>;
  private subs: Subscription;

  constructor(
    private widgetFactory: WidgetFactory = null,
    private cdr: ChangeDetectorRef,
    private terminator: TerminatorService,
  ) { }

  ngOnInit() {
    this.subs = this.terminator.onDestroy.subscribe(destroy => {
      if (destroy) {
        this.ref.destroy();
      }
    });
  }

  ngOnChanges() {
    this.ref = this.widgetFactory.createWidget(this.container, this.widgetInfo.id);
    this.widgetInstanciated.emit(this.ref.instance);
    this.widgetInstance = this.ref.instance;
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
