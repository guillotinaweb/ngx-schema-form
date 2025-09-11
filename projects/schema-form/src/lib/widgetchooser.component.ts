import {
  ChangeDetectorRef,
  Component,
  ComponentRef,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {TerminatorService} from './terminator.service';
import {WidgetFactory} from './widgetfactory';
import {Subscription} from 'rxjs';


@Component({
  selector: 'sf-widget-chooser',
  template: `
    <div #target></div>`,
  standalone: false
})
export class WidgetChooserComponent implements OnInit, OnChanges, OnDestroy {
  private widgetFactory = inject(WidgetFactory) ?? null;
  private cdr = inject(ChangeDetectorRef);
  private terminator = inject(TerminatorService);


  @Input() widgetInfo: any;

  @Output() widgetInstanciated = new EventEmitter<any>();

  @ViewChild('target', {read: ViewContainerRef, static: true}) container: ViewContainerRef;

  private widgetInstance: any;
  private ref: ComponentRef<any>;
  private subs: Subscription;

  constructor() {
  }

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
