import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Statistic } from '../../../models/statistic';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiPath: string;
  statistics: BehaviorSubject<Array<Statistic>>;
  statistics$: Observable<Array<Statistic>>;

  constructor(private http: HttpClient) {
    this.apiPath = ``;
    this.statistics = new BehaviorSubject<Array<Statistic>>([]);
    this.statistics$ = this.statistics.asObservable();
  }

  create() {

  }
}
