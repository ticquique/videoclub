import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomersService } from '../../services/customers.service';

@Component({
  templateUrl: './create.component.html'
})
export class CustomersCreationComponent {
  customerForm: FormGroup;

  constructor(private customersService: CustomersService) {
    this.customerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required])
    });
  }

  create() {
    this.customersService.create(this.customerForm.value);
  }
}
