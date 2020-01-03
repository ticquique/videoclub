import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Admin } from '../../../models/admin';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {
  apiPath: string;
  admins: BehaviorSubject<Array<Admin>>;
  admins$: Observable<Array<Admin>>;

  constructor() {
    this.apiPath = `${environment.apiPath}/administrator`;
    this.admins = new BehaviorSubject<Array<Admin>>([]);
    this.admins$ = this.admins.asObservable();
  }

  get(): Observable<Array<Admin>> {
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Admin>) => this.admins.next(response)));
  }

  create(body: Admin): Observable<any> {
    console.log('Admin creation');
    return this.gqlhttp.post(this.apiPath, body, null);
  }
}
