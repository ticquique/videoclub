import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies.routing.module';
import { MoviesPageComponent } from './components/page/page.component';
import { MoviesListComponent } from './components/list/list.component';
import { MoviesCreationComponent } from './components/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MoviesRoutingModule
  ],
  declarations: [
    MoviesPageComponent,
    MoviesListComponent,
    MoviesCreationComponent
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
