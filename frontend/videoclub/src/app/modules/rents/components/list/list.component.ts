import { Component } from '@angular/core';
import { RentsService } from '../../services/rents.service';

@Component({
  templateUrl: './list.component.html'
})
export class RentsListComponent {
  constructor(private rentsService: RentsService) { }
}
