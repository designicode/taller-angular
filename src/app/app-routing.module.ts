import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => 
      import('@modules/error/error.module').then(
        m => m.ErrorModule
      )
  },
  {
    path: 'auth',
    loadChildren: () => 
      import('@modules/auth/auth.module').then(
        m => m.AuthModule
      )
  },
  {
    path: 'panel',
    loadChildren: () => 
      import('@modules/panel/panel.module').then(
        m => m.PanelModule
      )
  },
  {
    path: '**',
    redirectTo: '/404',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
