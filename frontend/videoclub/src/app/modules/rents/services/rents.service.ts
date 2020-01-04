import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Rent } from '../../../models/rent';
import { GqlhttpService, Endpoints } from 'src/app/shared/services/gqlhttp.service';

@Injectable({
  providedIn: 'root'
})
export class RentsService {
  apiPath: Endpoints;
  rents: BehaviorSubject<Array<Rent>>;
  rents$: Observable<Array<Rent>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'rent';
    this.rents = new BehaviorSubject<Array<Rent>>([]);
    this.rents$ = this.rents.asObservable();
  }

  get(): Observable<any> {
    return this.gqlhttp.get(this.apiPath);
  }
}
