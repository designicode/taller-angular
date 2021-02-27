import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/panel/user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: () => 
            import('@modules/panel/user/user.module').then(
                m => m.UserModule
            )       
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
