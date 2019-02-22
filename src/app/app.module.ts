import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ng6O2ChartModule } from 'ng6-o2-chart';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	 Ng6O2ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
