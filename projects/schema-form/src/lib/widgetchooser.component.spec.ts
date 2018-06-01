import { ChangeDetectorRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { TerminatorService } from './terminator.service';
import { WidgetFactory } from './widgetfactory';
import { WidgetRegistry } from './widgetregistry';

import { WidgetChooserComponent } from './widgetchooser.component';

describe('WidgetChooserComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetChooserComponent],
      providers: [
        WidgetFactory,
        WidgetRegistry,
        ChangeDetectorRef,
        TerminatorService,
      ]
    })
      .compileComponents();
  });

  it('should create a widget which contain an instance', () => {
    let fixture = TestBed.createComponent(WidgetChooserComponent);
    let widgetChooserComponent = fixture.debugElement.componentInstance;
    expect(widgetChooserComponent).toBeDefined();
  });

  xit('should put the widget returned by the factory in the DOM', () => {

  });

});
