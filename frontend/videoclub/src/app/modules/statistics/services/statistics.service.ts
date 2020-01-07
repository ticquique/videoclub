import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Statistic } from '../../../models/statistic';
import { Endpoints, GqlhttpService } from 'src/app/shared/services/gqlhttp.service';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  apiPath: Endpoints;
  statistics: BehaviorSubject<Statistic>;
  statistics$: Observable<Statistic>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'statistic';
    this.statistics = new BehaviorSubject<Statistic>(null);
    this.statistics$ = this.statistics.asObservable();
  }
  
  get() {
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: any) => this.statistics.next(response)));
  }
  
  getByCustomer(body) {
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: any) => this.statistics.next(response.rents)));
  }

  create(body) {
    return this.gqlhttp.post(this.apiPath, body).pipe(tap((response: any) => this.statistics.next(response.rents)));
  }
}
