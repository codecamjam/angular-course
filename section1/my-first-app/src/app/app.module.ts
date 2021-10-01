import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//need to import this submodule so ngmodel works on the input element in app.component.html
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
