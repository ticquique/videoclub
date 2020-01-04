import { NgModule } from '@angular/core';

import { RentsRoutingModule } from './rents.routing.module';
import { RentsListComponent } from './components/list/list.component';
import { RentsPageComponent } from './components/page/page.component';
import { RentsService } from './services/rents.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    RentsRoutingModule,
    SharedModule
  ],
  declarations: [
    RentsPageComponent,
    RentsListComponent
  ],
  providers: [RentsService]
})
export class RentsModule { }
