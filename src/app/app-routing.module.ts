import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path: 'intern', loadChildren: () => import('./root/intern-home/intern-home.module').then(m => m.InternHomeModule)
  },
  {
    path: '', loadChildren: () => import('./root/citizen-home/citizen-home.module').then(m => m.CitizenHomeModule)
  },

  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [NavbarComponent];
