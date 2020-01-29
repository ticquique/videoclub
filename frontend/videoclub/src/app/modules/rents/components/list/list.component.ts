import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RentsService } from '../../services/rents.service';
import { Rent } from '../../../../models/rent';
import { Customer } from '../../../../models/customer';
import { CustomersService } from '../../../customers/services/customers.service';

declare var $;
@Component({
  templateUrl: './list.component.html'
})
export class RentsListComponent {
  modifyForm: FormGroup;
  selectedRent: Rent;
  members: Array<Customer>;

  constructor(public rentsService: RentsService, public customersService: CustomersService) {
    this.rentsService.get().subscribe();
    this.customersService.get().subscribe((response) => {
      if (response) {
        this.members = response;
      }
    });
    this.modifyForm = new FormGroup({
      devolution_date: new FormControl('', [Validators.required])
    });
  }

  selectRent(rent) {
    this.selectedRent = rent;
    const devol = new Date(+rent.devolution_date);
    this.modifyForm.controls.devolution_date.setValue(`${devol.getDate()}/${devol.getMonth()}/${devol.getFullYear()}`);
  }

  modifyRent() {
    const modifiedRent = {
      _id: this.selectedRent.id,
      devolution_date: this.modifyForm.controls.devolution_date.value,
    };
    const modal = $("#modifyModal");
    this.rentsService.modify(modifiedRent).subscribe(() => modal.modal('hide'));
  }
}
