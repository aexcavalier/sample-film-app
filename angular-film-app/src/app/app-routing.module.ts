import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { FilmListComponent } from './main/film-list/film-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/films', pathMatch: 'full' },
  { path: 'films', component: FilmListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
