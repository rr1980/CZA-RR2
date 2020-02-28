import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'citizen', pathMatch: 'full' },
  {
    path: 'citizen', loadChildren: () => import('./root/citizen-home/citizen-home.module').then(m => m.CitizenHomeModule)
  },
  {
    path: 'intern', loadChildren: () => import('./root/intern-home/intern-home.module').then(m => m.InternHomeModule)
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

export const routedComponents = [];
