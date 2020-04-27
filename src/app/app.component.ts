import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {

  page: string;
  schemaUrl: string;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

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
