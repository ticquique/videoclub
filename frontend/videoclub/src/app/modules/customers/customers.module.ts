import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CustomersRoutingModule } from './customers.routing.module';
import { CustomersPageComponent } from './components/page/page.component';
import { CustomersListComponent } from './components/list/list.component';
import { CustomersCreationComponent } from './components/create/create.component';
import { CustomersService } from './services/customers.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CustomersRoutingModule,
    SharedModule
  ],
  declarations: [
    CustomersPageComponent,
    CustomersListComponent,
    CustomersCreationComponent
  ],
  providers: [CustomersService]
})
export class CustomersModule { }
