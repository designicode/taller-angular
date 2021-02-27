import { NgModule } from '@angular/core';
import { E404Component } from './e404/e404.component';
import { SharedModule } from '@shared/shared.module';
import { ErrorRoutingModule } from './error.routing.module';

@NgModule({
  declarations: [E404Component],
  imports: [
    ErrorRoutingModule,
    SharedModule
  ]
})
export class ErrorModule { }
