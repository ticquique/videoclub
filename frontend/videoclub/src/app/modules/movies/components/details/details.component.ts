import { Component } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VideoclubsService } from '../../../videoclubs/services/videoclubs.service';

@Component({
  templateUrl: './details.component.html'
})
export class MovieDetailsComponent {
  constructor(private moviesService: MoviesService, public videoclubsService: VideoclubsService) {
  
  }
}
