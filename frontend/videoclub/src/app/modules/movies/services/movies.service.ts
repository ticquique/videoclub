import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Movie } from '../../../models/movie';
import { tap } from 'rxjs/operators';
import { GqlhttpService, Endpoints } from 'src/app/shared/services/gqlhttp.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiPath: Endpoints;
  movies: BehaviorSubject<Array<Movie>>;
  movies$: Observable<Array<Movie>>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'film';
    this.movies = new BehaviorSubject<Array<Movie>>([]);
    this.movies$ = this.movies.asObservable();
  }

  get():Observable<Array<Movie>> {
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Movie>) => this.movies.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating movie');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
