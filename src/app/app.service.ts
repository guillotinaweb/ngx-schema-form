import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

const DATA = 'data';

export interface AppData {
  url: string;
  schema: object;
}

@Injectable({providedIn: 'root'})
export class AppService {
  private http = inject(HttpClient);


  dataChanged = new BehaviorSubject<AppData | null>(null);

  get data(): AppData {
    if (this._data) {
      return this._data;
    }

    const data = sessionStorage.getItem(DATA);
    if (data) {
      this._data = JSON.parse(data);
      return this._data;
    }

    return;
  }

  set data(data: AppData) {
    this._data = data;
    sessionStorage.setItem(DATA, JSON.stringify(data));
  }

  private _data: AppData;

  constructor() {
  }


  loadSchema(url?: string): AppData {
    if (!url) {
      this.dataChanged.next(this.data);
      return this.data;
    }

    this.http.get(url).subscribe((schema) => {
      this.data = {url, schema};
      this.dataChanged.next(this.data);
    });

    return this.data;
  }

  removeSchema() {
    sessionStorage.removeItem(DATA);
    this._data = undefined;
    this.dataChanged.next(null);
  }


}
