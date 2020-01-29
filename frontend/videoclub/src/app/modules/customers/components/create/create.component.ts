import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CustomersService } from '../../services/customers.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create.component.html'
})
export class CustomersCreationComponent {
  customerForm: FormGroup;

  constructor(private customersService: CustomersService, private router: Router) {
    this.customerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      age: new FormControl(null, [Validators.required])
    });
  }

  create() {
    this.customerForm.controls.age.setValue(parseInt(this.customerForm.controls.age.value, 10));
    this.customersService.create(this.customerForm.value).subscribe(() => this.router.navigate(['/customers']));
  }
}
