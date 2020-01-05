import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AdminsService } from '../../services/admins.service';

@Component({
  templateUrl: './create.component.html'
})
export class AdminsCreationComponent {
  adminForm: FormGroup;

  constructor(private adminsService: AdminsService) {
    this.adminForm = new FormGroup({
      username: new FormControl('', [Validators.required])
    });
  }

  create(): void {
    this.adminsService.create(this.adminForm.value).subscribe(() => this.adminForm.reset());
  }
}
