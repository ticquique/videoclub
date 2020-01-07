import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies.routing.module';
import { MoviesPageComponent } from './components/page/page.component';
import { MoviesListComponent } from './components/list/list.component';
import { MoviesCreationComponent } from './components/create/create.component';
import { MoviesService } from './services/movies.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './components/details/details.component';

@NgModule({
  imports: [
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [
    MoviesPageComponent,
    MoviesListComponent,
    MoviesCreationComponent,
    MovieDetailsComponent
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
