import { Component, OnInit } from '@angular/core';

import { StatisticsService } from '../../services/statistics.service';
import { Observable } from 'rxjs';
import { Statistic } from 'src/app/models/statistic';

@Component({
  templateUrl: './list.component.html'
})
export class StatisticsListComponent implements OnInit {
  statistics$: Observable<Statistic>;

  constructor(public statisticsService: StatisticsService) { }

  ngOnInit(): void {
    this.statistics$ = this.statisticsService.get();
  }
}
