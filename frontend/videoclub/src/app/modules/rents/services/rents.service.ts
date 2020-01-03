import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Rent } from '../../../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentsService {
  apiPath: string;
  rents: BehaviorSubject<Array<Rent>>;
  rents$: Observable<Array<Rent>>;

  constructor() {
    this.apiPath = ``;
    this.rents = new BehaviorSubject<Array<Rent>>([]);
    this.rents$ = this.rents.asObservable();
  }

  get(): Observable<any> {
    return this.gqlhttp.get(this.apiPath);
  }
}
