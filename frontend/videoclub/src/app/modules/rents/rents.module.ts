import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentsRoutingModule } from './rents.routing.module';
import { RentsListComponent } from './components/list/list.component';
import { RentsPageComponent } from './components/page/page.component';
import { RentsService } from './services/rents.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RentsRoutingModule
  ],
  declarations: [
    RentsPageComponent,
    RentsListComponent
  ],
  providers: [RentsService]
})
export class RentsModule { }
