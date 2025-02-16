import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Rent } from '../../../models/rent';
import { GqlhttpService, Endpoints } from 'src/app/shared/services/gqlhttp.service';
import { tap } from 'rxjs/operators';

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
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Rent>) => this.rents.next(response)));
  }

  rent(body) {
    console.log('Renting movie');
    return this.gqlhttp.post(this.apiPath, body).pipe(tap((val: Rent) => this.rents.next(this.rents.getValue().concat(val))));
  }

  modify(body) {
    console.log('Modifyng renting');
    return this.gqlhttp.post(this.apiPath, body).pipe(tap((val: Rent) => this.rents.next(
      this.rents.getValue().map(inval => val && inval._id === val._id ? val : inval)
    )));
  }
}
