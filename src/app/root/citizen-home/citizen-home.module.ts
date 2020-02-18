import { NgModule } from '@angular/core';
import { CitizenHomeRoutingModule, routedComponents } from './citizen-home-routing.module';

import { InjectorModule } from 'src/app/shared/injector/injector.module';
import { CitizenService } from './citizen.service';
import { CitizenRouteGuard } from './citizen-route.guard';


@NgModule({
  imports: [
    CitizenHomeRoutingModule,
    InjectorModule,
  ],
  declarations: [
    routedComponents
  ],
  providers:[
    CitizenService,
    CitizenRouteGuard
  ]
})
export class CitizenHomeModule { }
