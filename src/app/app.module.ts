import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RulesAndSuggestionsComponent } from './rules-and-suggestions/rules-and-suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesAndSuggestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
