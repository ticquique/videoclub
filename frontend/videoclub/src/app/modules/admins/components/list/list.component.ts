import { Component } from '@angular/core';

import { AdminsService } from '../../services/admins.service';

@Component({
  templateUrl: './list.component.html'
})
export class AdminsListComponent {
  constructor(public adminsService: AdminsService) { }
}
