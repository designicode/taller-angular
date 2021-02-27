import { NgModule } from '@angular/core';
import { UsrTableComponent } from './usr-table/usr-table.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '@shared/shared.module';
import { UsrUpdateComponent } from './usr-update/usr-update.component';

@NgModule({
  declarations: [UsrTableComponent, UsrUpdateComponent],
  imports: [
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
