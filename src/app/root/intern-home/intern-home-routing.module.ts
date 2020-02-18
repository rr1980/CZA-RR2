import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternHomeComponent } from './intern-home.component';


const routes: Routes = [
  {
    path: '',
    component: InternHomeComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternHomeRoutingModule { }

export const routedComponents = [InternHomeComponent];