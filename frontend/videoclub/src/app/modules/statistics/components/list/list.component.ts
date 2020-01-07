import { Component } from '@angular/core';

import { StatisticsService } from '../../services/statistics.service';
import { CustomersService } from '../../../customers/services/customers.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './list.component.html'
})
export class StatisticsListComponent {
  selectedCustomer: string;
  
  constructor(public statisticsService: StatisticsService, public customersService: CustomersService) {
    this.selectedCustomer = '';
    this.customersService.get().subscribe();
  }
  
  getCustomerStatistics() {
    this.statisticsService.getByCustomer(this.selectedCustomer).subscribe();
  }
  
  selectCustomer(event) {
    this.selectedCustomer = event.target.value;
  }
  
  getMonth(month) {
    switch (month) {
      case 1:
        return 'Enero';
      case 2:
        return 'Febrero';
      case 3:
        return 'Marzo';
      case 4:
        return 'Abril';
      case 5:
        return 'Mayo';
      case 6:
        return 'Junio';
      case 7:
        return 'Julio';
      case 8:
        return 'Agosto';
      case 9:
        return 'Septiembre';
      case 10:
        return 'Octubre';
      case 11:
        return 'Noviembre';
      case 12:
        return 'Diciembre';
    }
  }
}
