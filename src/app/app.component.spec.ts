import { TestBed, waitForAsync } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { APP_BASE_HREF } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

describe("AppComponent", () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterModule.forRoot([]), FormsModule],
      providers: [
        { provide: APP_BASE_HREF, useValue: "/" },
        provideHttpClient(withInterceptorsFromDi()),
      ],
    }).compileComponents();
  }));
  it("should create the app", waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
