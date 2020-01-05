import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { CustomersService } from '../../../customers/services/customers.service';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class MoviesListComponent {
  selectedMovie: string;

  constructor(public moviesService: MoviesService, public customersService: CustomersService) {
    this.moviesService.get().subscribe();
  }

  selectMovieToRent(id) {
    this.selectedMovie = id;
  }

  rent(customerId: string) {
    const rent = {
      films: [{ id: this.selectedMovie }],
      member: customerId
    }
    // this.moviesService.rent(rent).subscribe();
  }
}
