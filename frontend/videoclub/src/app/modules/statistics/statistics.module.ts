import { NgModule } from '@angular/core';

import { StatisticsRoutingModule } from './statistics.routing.module';
import { StatisticsPageComponent } from './components/page/page.component';
import { StatisticsListComponent } from './components/list/list.component';
import { StatisticsService } from './services/statistics.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    StatisticsRoutingModule,
    SharedModule
  ],
  declarations: [
    StatisticsPageComponent,
    StatisticsListComponent
  ],
  providers: [StatisticsService]
})
export class StatisticsModule { }
