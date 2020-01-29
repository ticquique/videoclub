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
  movie: BehaviorSubject<Movie>;
  movie$: Observable<Movie>;

  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'film';
    this.movies = new BehaviorSubject<Array<Movie>>([]);
    this.movies$ = this.movies.asObservable();
    this.movie = new BehaviorSubject<Movie>(null);
    this.movie$ = this.movie.asObservable();
  }

  get(): Observable<Array<Movie>> {
    console.log('Retrieving movies');
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Movie>) => this.movies.next(response)));
  }

  getById(id) {
    console.log('Retrieving movie');
    return this.gqlhttp.getOne(this.apiPath, id).pipe(tap((response: Movie) => this.movie.next(response)));
  }

  create(body): Observable<any> {
    console.log('Creating movie');
    return this.gqlhttp.post(this.apiPath, body);
  }
}
