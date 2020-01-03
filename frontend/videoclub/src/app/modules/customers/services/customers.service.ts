import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Customer } from '../../../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiPath: string;
  customers: BehaviorSubject<Array<Customer>>;
  customers$: Observable<Array<Customer>>;

  constructor() {
    this.apiPath = ``;
    this.customers =  new BehaviorSubject<Array<Customer>>([]);
    this.customers$ =  this.customers.asObservable();
  }

  create(body: Customer): Observable<any> {
    console.log('Creating customer');
    return this.gqlhttp.post(this.apiPath, body, null);
  }
}
