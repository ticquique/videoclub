import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticsPageComponent } from './components/page/page.component';
import { StatisticsListComponent } from './components/list/list.component';
import { StatisticsCreationComponent } from './components/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsPageComponent,
    children: [
      {
        path: '',
        component: StatisticsListComponent
      },
      {
        path: 'create',
        component: StatisticsCreationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }

