import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RentsPageComponent } from './components/page/page.component';
import { RentsListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: RentsPageComponent,
    children: [
      {
        path: '',
        component: RentsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentsRoutingModule { }

