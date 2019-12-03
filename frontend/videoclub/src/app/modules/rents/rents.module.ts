import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentsRoutingModule } from './rents.routing.module';
import { RentsListComponent } from './components/list/list.component';
import { RentsPageComponent } from './components/page/page.component';

@NgModule({
  imports: [
    CommonModule,
    RentsRoutingModule
  ],
  declarations: [
    RentsPageComponent,
    RentsListComponent
  ]
})
export class RentsModule { }
