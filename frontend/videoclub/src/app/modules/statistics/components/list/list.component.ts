import { Component } from '@angular/core';

import { StatisticsService } from '../../services/statistics.service';

@Component({
  templateUrl: './list.component.html'
})
export class StatisticsListComponent {
  constructor(public statisticsService: StatisticsService) { }
}
