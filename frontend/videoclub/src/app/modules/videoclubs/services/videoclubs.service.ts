import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { Videoclub } from '../../../models/videoclub';
import { Endpoints, GqlhttpService } from 'src/app/shared/services/gqlhttp.service';
import { tap } from 'rxjs/operators';
import { Movie } from '../../../models/movie';

@Injectable({
  providedIn: 'root'
})
export class VideoclubsService {
  apiPath: Endpoints;
  videoclubs: BehaviorSubject<Array<Videoclub>>;
  videoclubs$: Observable<Array<Videoclub>>;
  
  constructor(private gqlhttp: GqlhttpService) {
    this.apiPath = 'videoclub';
    this.videoclubs = new BehaviorSubject<Array<Videoclub>>([]);
    this.videoclubs$ = this.videoclubs.asObservable();
  }
  
  get() {
    return this.gqlhttp.get(this.apiPath).pipe(tap((response: Array<Videoclub>) => this.videoclubs.next(response)));
  }
}
