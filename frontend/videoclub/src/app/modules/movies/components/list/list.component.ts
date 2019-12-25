import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class MoviesListComponent {
  constructor(private moviesService: MoviesService) {  }

  rent(id: string) {
    this.moviesService.rent(id);
  }
}
