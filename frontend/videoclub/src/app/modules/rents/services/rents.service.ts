import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Rent } from '../../../models/rent';

@Injectable({
  providedIn: 'root'
})
export class RentsService {
  apiPath: string;
  rents: BehaviorSubject<Array<Rent>>;
  rents$: Observable<Array<Rent>>;

  constructor(private http: HttpClient) {
    this.apiPath = ``;
    this.rents = new BehaviorSubject<Array<Rent>>([]);
    this.rents$ = this.rents.asObservable();
  }

  get(): Observable<any> {
    return this.http.get(this.apiPath);
  }
}
