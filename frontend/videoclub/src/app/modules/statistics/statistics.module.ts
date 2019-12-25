import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StatisticsRoutingModule } from './statistics.routing.module';
import { StatisticsPageComponent } from './components/page/page.component';
import { StatisticsListComponent } from './components/list/list.component';
import { StatisticsService } from './services/statistics.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StatisticsRoutingModule
  ],
  declarations: [
    StatisticsPageComponent,
    StatisticsListComponent
  ],
  providers: [StatisticsService]
})
export class StatisticsModule { }
