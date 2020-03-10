import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutGuard } from './layout/layout.guard';
import { EnsureLoginGuard } from './login/ensure-login.guard';

/**
 * localhost:4200/#/home  =>  HomeComponent
 * localhost:4200/#/about =>  AboutComponent
 */
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [LayoutGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path:'about',
  //   component:AboutComponent
  // },
  {
    path: 'login',
    component: LoginComponent,
    canDeactivate: [EnsureLoginGuard]
  },
  {
    path: 'feature',
    loadChildren: './feature/feature.module#FeatureModule'
  }
  //,
  // {
  //   path: '**',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
