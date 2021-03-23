import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {HardcodedAuthenticationService} from './hardcoded-authentication.service';
import {BasicAuthenticationService} from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) { }

  public canActivate(_: ActivatedRouteSnapshot, __: RouterStateSnapshot): boolean {
    if (this.basicAuthenticationService.isUserLoggedIn()){
      return true;
    }

    this.router.navigate(['login']);

    return false;
  }
}
