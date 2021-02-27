import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { NoAuthGuard } from './guard/no-auth.guard';


@NgModule({
  providers: [
    AuthGuard,
    NoAuthGuard
  ]
})
export class CoreModule { }
