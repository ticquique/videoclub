import { Component } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './details.component.html'
})
export class MovieDetailsComponent {
  constructor(public moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
    this.moviesService.getById(this.activatedRoute.snapshot.params.id).subscribe();
  }
}
