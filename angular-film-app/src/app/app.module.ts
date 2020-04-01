import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { FilmListComponent } from './main/film-list/film-list.component';
import { FilmDetailsComponent } from './main/film-details/film-details.component';
import { FilmApiService } from './main/services/film-api.service';

@NgModule({
  declarations: [
    AppComponent,
    FilmListComponent,
    FilmDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
  	FilmApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
