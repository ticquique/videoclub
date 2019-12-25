import { Component } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './create.component.html'
})
export class MoviesCreationComponent {
  movieForm: FormGroup;

  constructor(private moviesService: MoviesService) {
    this.movieForm = new FormGroup({
      title: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      releaseDate: new FormControl(null, [Validators.required]),
      pvp: new FormControl(null, [Validators.required]),
    });
  }

  create() {
    this.moviesService.create(this.movieForm.value);
  }
}
