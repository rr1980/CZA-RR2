import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Event as NavigationEvent } from "@angular/router";
import { filter } from "rxjs/operators";
import { NavigationStart } from "@angular/router";
import { CitizenService } from './citizen.service';

@Component({
  selector: 'cza-citizen-home',
  templateUrl: './citizen-home.component.html',
  styleUrls: ['./citizen-home.component.scss']
})
export class CitizenHomeComponent {

  onTest() {
    console.debug(this.cs.get_appointmentDataValue);
  }
  constructor(private router: Router, public cs: CitizenService) {
    // router.events.pipe(
    //   filter(
    //     ( event: NavigationEvent ) => {

    //       return( event instanceof NavigationStart );

    //     }
    //   )
    // )
    // .subscribe(
    //   ( event: NavigationStart ) => {
    //     let s = this.router.getCurrentNavigation().extras.state;
    //     console.group( "NavigationStart Event" );
    //     // Every navigation sequence is given a unique ID. Even "popstate"
    //     // navigations are really just "roll forward" navigations that get
    //     // a new, unique ID.

    //     console.log( ">:", s );

    //     // This "restoredState" property is defined when the navigation
    //     // event is triggered by a "popstate" event (ex, back / forward
    //     // buttons). It will contain the ID of the earlier navigation event
    //     // to which the browser is returning.
    //     // --
    //     // CAUTION: This ID may not be part of the current page rendering.
    //     // This value is pulled out of the browser; and, may exist across
    //     // page refreshes.
    //     if ( event.restoredState ) {

    //       console.warn(
    //         "restoring navigation id:",
    //         event.restoredState.navigationId
    //       );

    //     }

    //     console.groupEnd();

    //   }
    // )
  }
}
