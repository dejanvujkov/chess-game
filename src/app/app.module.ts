import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history.component';
import { TableComponent } from './table/table.component';
import { PileComponent } from './pile/pile.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    TableComponent,
    PileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
