import { NgModule } from '@angular/core';
import { InternHomeRoutingModule, routedComponents } from './intern-home-routing.module';
import { InjectorModule } from 'src/app/shared/injector/injector.module';

@NgModule({
  imports: [
    InternHomeRoutingModule,
    InjectorModule,
  ],
  declarations: [routedComponents]
})
export class InternHomeModule { }
