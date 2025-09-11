import {Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  standalone: false
})
export class AppComponent implements OnInit {
  private appService = inject(AppService);
  private router = inject(Router);

  page: string;
  schemaUrl: string;

  constructor() {
  }

  loadSchema() {
    this.appService.loadSchema(this.schemaUrl);
  }

  removeSchema() {
    this.schemaUrl = undefined;
    this.appService.removeSchema();
  }

  ngOnInit() {
    const data = this.appService.loadSchema();
    if (data && data.url) {
      this.schemaUrl = data.url;
    }

    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.page = this.router.routerState.snapshot.url.replace('/', '');
    });
  }

}
