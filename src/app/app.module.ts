import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleColorChangeComponent } from './title-color-change/title-color-change.component';
import { ChangeCardStyleComponent } from './change-card-style/change-card-style.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleColorChangeComponent,
    ChangeCardStyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
