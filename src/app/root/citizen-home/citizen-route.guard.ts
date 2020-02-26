import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs';
import { CitizenService } from './citizen.service';

@Injectable()
export class CitizenRouteGuard implements CanActivate {

  constructor(private cs: CitizenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {



    const goTo = this.cs.validateFor(route.url[0].path);

    // console.debug(goTo, 'citizen/' + route.url[0].path);

    if (goTo === 'citizen/' + route.url[0].path) {
      return true;
    }
    else {
      this.router.navigate([goTo]);
    }

    // let s = this.router.getCurrentNavigation().extras.state;
    // if (s && (s.back | s.next)) {
    //   return true;
    // }
    // else{
    //   this.router.navigate(['passcode']);
    // }
  }
}

