import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StatisticsPageComponent } from './components/page/page.component';
import { StatisticsListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: StatisticsPageComponent,
    children: [
      {
        path: '',
        component: StatisticsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }

