import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Customer } from '../../../models/customer';
import { GqlhttpService, Endpoints } from 'src/app/shared/services/gqlhttp.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiPath: Endpoints;
  customers: BehaviorSubject<Array<Customer>>;
  customers$: Observable<Array<Customer>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'member';
    this.customers =  new BehaviorSubject<Array<Customer>>([]);
    this.customers$ =  this.customers.asObservable();
  }

  create(body: Customer): Observable<any> {
    console.log('Creating customer');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
