import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { Movie } from '../../../models/movie';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiPath: string;
  movies: BehaviorSubject<Array<Movie>>;
  movies$: Observable<Array<Movie>>;

  constructor(private http: HttpClient) {
    this.apiPath = `${environment.apiPath}/movies`;
    this.movies = new BehaviorSubject<Array<Movie>>([]);
    this.movies$ = this.movies.asObservable();
  }

  get():Observable<any> {
    return this.http.get(this.apiPath);
  }

  create(body): Observable<any> {
    console.log('Creating movie');
    return this.http.post(this.apiPath, body, null);
  }

  rent(id: string): Observable<any> {
    console.log('Renting movie');
    return this.http.post(`${this.apiPath}/${id}`, null, null);
  }
}
