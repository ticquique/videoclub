import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Customer } from '../../../models/customer';
import { customers } from '../defaults';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiPath: string;
  customers: BehaviorSubject<Array<Customer>>;
  customers$: Observable<Array<Customer>>;

  constructor(private http: HttpClient) {
    this.apiPath = ``;
    this.customers =  new BehaviorSubject<Array<Customer>>(customers);
    this.customers$ =  this.customers.asObservable();
  }

  create(body: Customer): Observable<any> {
    console.log('Creating customer');
    return this.http.post(this.apiPath, body, null);
  }
}
