import { Injectable } from '@angular/core';
import { PERMISSIONS_ENUM } from '@data/enum';
import { IApiUserAuthenticated } from '@data/interfaces/api';

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {

  get currentUser(): IApiUserAuthenticated {
    return {permissions: { READ_USER: 1, UPDATE_USER: 1}};
  }

  get isAuthenticated() {
    return true;
  }

  hasAccessToModule(p: PERMISSIONS_ENUM): boolean {
    return this.isAuthenticated && this.currentUser.permissions[p] === 1;
  }
}
