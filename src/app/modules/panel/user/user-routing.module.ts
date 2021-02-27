import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guard/auth.guard';
import { PERMISSIONS_ENUM } from '@data/enum';
import { UsrTableComponent } from './usr-table/usr-table.component';
import { UsrUpdateComponent } from './usr-update/usr-update.component';

const routes: Routes = [
    {
        path: '',
        component: UsrTableComponent,
        canActivate: [AuthGuard],
        data: { permission: PERMISSIONS_ENUM.READ_USER }
    },
    {
        path: 'update',
        component: UsrUpdateComponent,
        canActivate: [AuthGuard],
        data: { permission: PERMISSIONS_ENUM.UPDATE_USER }
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
