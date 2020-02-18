import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';
import { CitizenService } from './citizen.service';

@Injectable()
export class CitizenRouteGuard implements CanActivate {

  constructor(private cs: CitizenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    let s = this.router.getCurrentNavigation().extras.state;
    if (s && (s.back | s.next)) {
      return true;
    }
    else{
      this.router.navigate(['passcode']);
    }
  }
}

