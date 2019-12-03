import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminsPageComponent } from './components/page/page.component';
import { AdminsListComponent } from './components/list/list.component';
import { AdminsCreationComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: AdminsPageComponent,
    children: [
      {
        path: '',
        component: AdminsListComponent
      },
      {
        path: 'create',
        component: AdminsCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminsRoutingModule { }

