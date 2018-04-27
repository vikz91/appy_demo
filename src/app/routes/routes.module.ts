import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeComponent } from './me/me.component';
import { AboutComponent } from '../about/about.component';
import { NewCmpComponent } from '../new-cmp/new-cmp.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'me' },
  { path: 'me', component: MeComponent },
  { path: 'new-cmp', component: NewCmpComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule {}

export const routingComponents = [AboutComponent, NewCmpComponent, MeComponent];
