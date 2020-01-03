import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Movie } from '../../../models/movie';
import { environment } from '../../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiPath: string;
  movies: BehaviorSubject<Array<Movie>>;
  movies$: Observable<Array<Movie>>;

  constructor() {
    this.apiPath = `${environment.apiPath}/film`;
    this.movies = new BehaviorSubject<Array<Movie>>([]);
    this.movies$ = this.movies.asObservable();
  }

  get():Observable<Array<Movie>> {
    return this.gqlhttp.get(`${this.apiPath}`).pipe(tap((response: Array<Movie>) => this.movies.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating movie');
    return this.gqlhttp.post(this.apiPath, { query: body });
  }

  rent(id: string): Observable<any> {
    console.log('Renting movie');
    return this.gqlhttp.post(`${this.apiPath}/${id}`, null, null);
  }
}
