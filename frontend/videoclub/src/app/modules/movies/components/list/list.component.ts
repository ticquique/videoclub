import { Component, ChangeDetectorRef } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { CustomersService } from '../../../customers/services/customers.service';
import { RentsService } from '../../../rents/services/rents.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../../../models/customer';
import { Rent } from 'src/app/models/rent';
import { Router } from '@angular/router';
declare var $;

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.css']
})
export class MoviesListComponent {
  selectedMovies: Array<any>;
  rents: Array<any>;
  total: number;
  rentForm: FormGroup;
  selectedCustomer: Customer;

  constructor(public moviesService: MoviesService,
    public customersService: CustomersService,
    public rentsService: RentsService,
    public router: Router,
    private ref: ChangeDetectorRef) {

    this.rents = [];
    this.selectedMovies = [];
    this.total = 0;
    this.rentForm = new FormGroup({
      date: new FormControl('', [Validators.required]),
      member: new FormControl('', [Validators.required])
    });
    this.moviesService.get().subscribe();
    this.customersService.get().subscribe();
    this.rentsService.rents$.subscribe((res) => {
      if (res) {
        res.forEach(rent => this.rents = this.rents.concat(rent.films));
      }
    });
    this.rentsService.get().subscribe();
  }

  selectMovieToRent(movie) {
    this.selectedMovies.push(movie);
    this.total += movie.rent_price;
  }

  deselectMovieToRent(selectedMovie) {
    this.selectedMovies = this.selectedMovies.filter(movie => movie.id !== selectedMovie.id);
    this.total -= selectedMovie.rent_price;
  }

  isMovieSelected(id) {
    return this.selectedMovies.filter(movie => movie.id === id).length > 0;
  }

  isMovieRented(rents, id) {
    return rents.filter(rent => {
      return rent._id === id;
    }).length > 0;
  }

  selectCustomer(customer) {
    this.selectedCustomer = customer;
    this.rentForm.controls.member.setValue(this.selectedCustomer.id)
  }

  deselectCustomer() {
    this.selectedCustomer = null;
  }

  rent() {
    const rentDate = new Date();
    const movies = [];
    this.selectedMovies.map((movie) => movies.push(movie.id));

    const rent = {
      films: movies,
      member: this.rentForm.controls.member.value,
      devolution_date: this.rentForm.controls.date.value,
      pickup_date: rentDate.toString()
    };

    const modal = $("#rentModal");
    this.rentsService.rent(rent).subscribe((val: Rent) => {
      modal.modal('hide');
      this.ref.markForCheck();
    });
  }
}
