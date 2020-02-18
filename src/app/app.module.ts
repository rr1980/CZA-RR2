import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InjectorModule } from './shared/injector/injector.module';

@NgModule({
   declarations: [
      AppComponent,
      routedComponents,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      InjectorModule.forRoot(),
      AppRoutingModule
   ],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ],
   schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
