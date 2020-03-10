import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root'
})
export class EnsureLoginGuard implements CanDeactivate<LoginComponent> {
  /**
   * canDeactivate() will be triggered when user is leaving the routing defined by th Guard
   * @param {LoginComponent} component - current routed component
   * @param {ActivatedRouteSnapshot} currentRoute - current router
   * @param {RouterStateSnapshot} currentState - current state of router
   * @param {RouterStateSnapshot} [nextState] - next state of router
   * @returns {(boolean | UrlTree | Observable<boolean> | Promise<boolean>)}
   */
  canDeactivate(
    component: LoginComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.name.trim()) {
      return confirm('Are you sure want to leave current page?');
    }
    return true;
  }
}
