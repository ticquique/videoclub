import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Statistic } from '../../../models/statistic';
import { Endpoints, GqlhttpService } from 'src/app/shared/services/gqlhttp.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiPath: Endpoints;
  statistics: BehaviorSubject<Array<Statistic>>;
  statistics$: Observable<Array<Statistic>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'statistic';
    this.statistics = new BehaviorSubject<Array<Statistic>>([]);
    this.statistics$ = this.statistics.asObservable();
  }

  create() {

  }

  get(): Observable<any> {
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Statistic>) => this.statistics.next(response)));
  }
}
