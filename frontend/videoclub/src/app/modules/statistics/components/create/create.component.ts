import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { StatisticsService } from '../../services/statistics.service';
import { CustomersService } from '../../../customers/services/customers.service';
import { AdminsService } from '../../../admins/services/admins.service';

@Component({
  templateUrl: './create.component.html'
})
export class StatisticsCreationComponent {
  statisticForm: FormGroup;

  constructor(private statisticsService: StatisticsService, public customersService: CustomersService, public adminsService: AdminsService) {
    this.statisticForm = new FormGroup({
      member: new FormControl('', [Validators.required]),
      month: new FormControl('', [Validators.required]),
      administrator: new FormControl('', [Validators.required])
    });
    this.customersService.get().subscribe();
    this.adminsService.get().subscribe();
  }
  
  generate() {
    this.statisticForm.controls.month.setValue(parseInt(this.statisticForm.controls.month.value, 10));
    
    this.statisticsService.create(this.statisticForm.value).subscribe();
  }
}
