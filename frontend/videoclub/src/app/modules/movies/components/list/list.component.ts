import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class MoviesListComponent {
  constructor(public moviesService: MoviesService) {
    this.moviesService.get();
  }

  rent(id: string) {
    this.moviesService.rent(id);
  }
}
