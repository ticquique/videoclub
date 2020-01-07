import { NgModule } from '@angular/core';

import { StatisticsRoutingModule } from './statistics.routing.module';
import { StatisticsPageComponent } from './components/page/page.component';
import { StatisticsListComponent } from './components/list/list.component';
import { StatisticsService } from './services/statistics.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { StatisticsCreationComponent } from './components/create/create.component';

@NgModule({
  imports: [
    StatisticsRoutingModule,
    SharedModule
  ],
  declarations: [
    StatisticsPageComponent,
    StatisticsListComponent,
    StatisticsCreationComponent
  ],
  providers: [StatisticsService]
})
export class StatisticsModule { }
