import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies.routing.module';
import { MoviesPageComponent } from './components/page/page.component';
import { MoviesListComponent } from './components/list/list.component';
import { MoviesCreationComponent } from './components/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesPageComponent,
    MoviesListComponent,
    MoviesCreationComponent
  ]
})
export class MoviesModule { }
