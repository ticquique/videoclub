import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatisticsRoutingModule } from './statistics.routing.module';
import { StatisticsPageComponent } from './components/page/page.component';
import { StatisticsListComponent } from './components/list/list.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [
    StatisticsPageComponent,
    StatisticsListComponent
  ]
})
export class StatisticsModule { }
