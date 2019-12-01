import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminsRoutingModule } from './admins.routing.module';
import { AdminsPageComponent } from './components/page/page.component';
import { AdminsListComponent } from './components/list/list.component';
import { AdminsCreationComponent } from './components/create/create.component';

@NgModule({
  imports: [
    CommonModule,
    AdminsRoutingModule
  ],
  declarations: [
    AdminsPageComponent,
    AdminsListComponent,
    AdminsCreationComponent
  ]
})
export class AdminsModule { }
