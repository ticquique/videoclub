import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Admin } from '../../../models/admin';
import { admins } from '../defaults';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  apiPath: string;
  admins: BehaviorSubject<Array<Admin>>;
  admins$: Observable<Array<Admin>>;

  constructor(private http: HttpClient) {
    this.apiPath = ``;
    this.admins = new BehaviorSubject<Array<Admin>>(admins);
    this.admins$ = this.admins.asObservable();
  }

  create(body: Admin): Observable<any> {
    console.log('Admin creation');
    return this.http.post(this.apiPath, body, null);
  }
}
