import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AdminsRoutingModule } from './admins.routing.module';
import { AdminsPageComponent } from './components/page/page.component';
import { AdminsListComponent } from './components/list/list.component';
import { AdminsCreationComponent } from './components/create/create.component';
import { AdminsService } from './services/admins.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    AdminsRoutingModule,
    SharedModule
  ],
  declarations: [
    AdminsPageComponent,
    AdminsListComponent,
    AdminsCreationComponent
  ],
  providers: [AdminsService]
})
export class AdminsModule { }
