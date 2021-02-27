import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { E401Component } from './e401/e401.component';
import { E404Component } from './e404/e404.component';

const routes: Routes = [
    {
        path: '404',
        component: E404Component
    },
    {
        path: '401',
        component: E401Component
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
