import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesPageComponent } from './components/page/page.component';
import { MoviesListComponent } from './components/list/list.component';
import { MoviesCreationComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesPageComponent,
    children: [
      {
        path: '',
        component: MoviesListComponent
      },
      {
        path: 'create',
        component: MoviesCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }

