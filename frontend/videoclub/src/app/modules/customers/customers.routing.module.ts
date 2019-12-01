import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersPageComponent } from './components/page/page.component';
import { CustomersListComponent } from './components/list/list.component';
import { CustomersCreationComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersPageComponent,
    children: [
      {
        path: '',
        component: CustomersListComponent
      },
      {
        path: 'create',
        component: CustomersCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

