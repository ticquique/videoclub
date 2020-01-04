import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Statistic } from '../../../models/statistic';
import { Endpoints } from 'src/app/shared/services/gqlhttp.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiPath: Endpoints;
  statistics: BehaviorSubject<Array<Statistic>>;
  statistics$: Observable<Array<Statistic>>;

  constructor() {
    this.apiPath = 'statistic';
    this.statistics = new BehaviorSubject<Array<Statistic>>([]);
    this.statistics$ = this.statistics.asObservable();
  }

  create() {

  }
}
