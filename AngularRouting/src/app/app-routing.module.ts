import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

/**
 * localhost:4200/#/home  =>  HomeComponent
 * localhost:4200/#/about =>  AboutComponent
 */
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
