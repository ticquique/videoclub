import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { RentsService } from '../../services/rents.service';
import { Rent } from '../../../../models/rent';

@Component({
  templateUrl: './list.component.html'
})
export class RentsListComponent {
  modifyForm: FormGroup;
  selectedRent: Rent;
  
  constructor(public rentsService: RentsService) {
    this.rentsService.get().subscribe();
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
      pickup_date: this.selectedRent.pickup_date,
      devolution_date: this.modifyForm.controls.devolution_date.value,
      member: this.selectedRent.member
    };
    
    this.rentsService.modify(modifiedRent).subscribe();
  }
}
