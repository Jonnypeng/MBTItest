import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ReadmeComponent } from './readme/readme.component';
import { QaComponent } from './qa/qa.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadmeComponent,
    QaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
