import { Component } from '@angular/core';
import { CustomersService } from '../../services/customers.service';

@Component({
  templateUrl: './list.component.html'
})
export class CustomersListComponent {
  constructor(public customersService: CustomersService) {
    this.customersService.get().subscribe();
  }
}
