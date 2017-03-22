import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './people/person-details/person-details.component';
import { PersonListComponent } from './people/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailsComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
