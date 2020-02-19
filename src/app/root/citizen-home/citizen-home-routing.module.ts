import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from 'src/app/footer/footer.component';

import { CitizenHomeComponent } from './citizen-home.component';
import { CitizenHeaderComponent } from './citizen-header/citizen-header.component';
import { CitizenPasscodeComponent } from './citizen-passcode/citizen-passcode.component';
import { CitizenAppointmentComponent } from './citizen-appointment/citizen-appointment.component';
import { CitizenPrivacyPolicyComponent } from './citizen-privacy-policy/citizen-privacy-policy.component';
import { CitizenPersonalDetailsComponent } from './citizen-personal-details/citizen-personal-details.component';
import { CitizenCompleteBookingComponent } from './citizen-complete-booking/citizen-complete-booking.component';
import { CitizenConfirmationComponent } from './citizen-confirmation/citizen-confirmation.component';
import { CitizenRouteGuard } from './citizen-route.guard';
import { CitizenFooterComponent } from './citizen-footer/citizen-footer.component';

const routes: Routes = [
  {
    path: '',
    component: CitizenHomeComponent,
    children: [
      { path: '', redirectTo: 'passcode', pathMatch: 'full' },
      { path: 'passcode', component: CitizenPasscodeComponent },
      { path: 'appointment', component: CitizenAppointmentComponent, canActivate: [CitizenRouteGuard] },
      { path: 'privacypolicy', component: CitizenPrivacyPolicyComponent, canActivate: [CitizenRouteGuard] },
      { path: 'personaldetails', component: CitizenPersonalDetailsComponent, canActivate: [CitizenRouteGuard] },
      { path: 'completebooking', component: CitizenCompleteBookingComponent, canActivate: [CitizenRouteGuard] },
      { path: 'confirmation', component: CitizenConfirmationComponent, canActivate: [CitizenRouteGuard] },
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenHomeRoutingModule { }

export const routedComponents = [
  CitizenHeaderComponent,
  CitizenHomeComponent,
  CitizenFooterComponent,
  FooterComponent,
  CitizenPasscodeComponent,
  CitizenAppointmentComponent,
  CitizenPrivacyPolicyComponent,
  CitizenPersonalDetailsComponent,
  CitizenCompleteBookingComponent,
  CitizenConfirmationComponent
];