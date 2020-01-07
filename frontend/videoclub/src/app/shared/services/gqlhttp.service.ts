import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Admin } from 'src/app/models/admin';
import { Customer } from 'src/app/models/customer';
import { Movie } from 'src/app/models/movie';
import { Rent } from 'src/app/models/rent';
import { Statistic } from 'src/app/models/statistic';
import { Videoclub } from 'src/app/models/videoclub';
import { map } from 'rxjs/operators';

export type Endpoints = 'administrator' | 'member' | 'film' | 'rent' | 'videoclub' | 'statistic';
type Interfaces = Admin | Customer | Movie | Rent | Statistic | Videoclub;

const administrator = "{id, _id, username, created_at, updated_at}";
const member = "{_id, id, name, age, created_at, updated_at}";
const videoclub = "{_id, id, manager, city, street, postal_code, created_at, updated_at}";
const film = `{_id, id, name, director, released_at, rent_price, videoclub_code, videoclub ${videoclub}, created_at, updated_at}`;
const rent = `{_id, id, films ${film}, member ${member}, pickup_date, devolution_date, amount, created_at, updated_at}`;
const statistic = `{_id, id, administrator ${administrator}, member ${member}, rents ${rent}, month, amount, created_at, updated_at}`;

const mapping = {
  administrator,
  member,
  film,
  rent,
  videoclub,
  statistic
}

@Injectable()
export class GqlhttpService {

  headers = new HttpHeaders();

  constructor(private http: HttpClient) { }

  private parseObject<T>(element: T) {
    return JSON.stringify(element).replace(/\"([^(\")"]+)\":/g, "$1:")
  }

  private genGetString(type: Endpoints, params?: any) {
    return {
      query: `query {
      ${type}s ${ params ? JSON.stringify(params).replace(/\"([^(\")"]+)\":/g, "$1:") : ''} ${mapping[type]}
    }`}
  }

  private genGetoneString(type: Endpoints, id: string) {
    return {
      query: `query { ${type}(id: "${id}") ${mapping[type]} }`
    }
  }

  private genPostString(type: Endpoints, body: Interfaces) {
    return {
      query: `mutation {
      ${type}(element: ${JSON.stringify(body).replace(/\"([^(\")"]+)\":/g, "$1:")}) ${mapping[type]}
    }`}
  }

  get<T>(type: Endpoints, params?: any): Observable<T[]> {
    return this.http.post<any>(environment.apiPath, this.genGetString(type), { headers: this.headers }).pipe(
      map(v => v.data[`${type}s`])
    );
  }

  getOne<T>(type: Endpoints, id: string): Observable<T> {
    return this.http.post<any>(environment.apiPath, this.genGetoneString(type, id), { headers: this.headers }).pipe(
      map(v => v.data[type])
    );
  }

  post<T>(type: Endpoints, body: Interfaces): Observable<T> {
    return this.http.post<any>(environment.apiPath, this.genPostString(type, body), { headers: this.headers }).pipe(
      map(v => v.data[type])
    );
  }
}
