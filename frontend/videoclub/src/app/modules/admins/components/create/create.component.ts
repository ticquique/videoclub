import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AdminsService } from '../../services/admins.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create.component.html'
})
export class AdminsCreationComponent {
  adminForm: FormGroup;

  constructor(private adminsService: AdminsService, public router: Router) {
    this.adminForm = new FormGroup({
      username: new FormControl('', [Validators.required])
    });
  }

  create(): void {
    this.adminsService.create(this.adminForm.value).subscribe(() => this.router.navigate(['/admins']));
  }
}
