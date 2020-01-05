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
      name: new FormControl(null, [Validators.required]),
      director: new FormControl(null, [Validators.required]),
      released_at: new FormControl(null, [Validators.required]),
      rent_price: new FormControl(0, [Validators.required]),
      videoclub_code: new FormControl(window.localStorage.getItem('id'))
    });
  }

  create() {
    this.movieForm.controls.rent_price.setValue(parseInt(this.movieForm.controls.rent_price.value, 10));
    this.moviesService.create(this.movieForm.value).subscribe();
  }
}
