import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers.routing.module';
import { CustomersPageComponent } from './components/page/page.component';
import { CustomersListComponent } from './components/list/list.component';
import { CustomersCreationComponent } from './components/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [
    CustomersPageComponent,
    CustomersListComponent,
    CustomersCreationComponent
  ]
})
export class CustomersModule { }
