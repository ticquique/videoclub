import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies.routing.module';
import { MoviesPageComponent } from './components/page/page.component';
import { MoviesListComponent } from './components/list/list.component';
import { MoviesCreationComponent } from './components/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MoviesService } from './services/movies.service';
import { GqlhttpService } from 'src/app/shared/services/gqlhttp.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    MoviesRoutingModule,
    SharedModule
  ],
  declarations: [
    MoviesPageComponent,
    MoviesListComponent,
    MoviesCreationComponent
  ],
  providers: [MoviesService]
})
export class MoviesModule { }
