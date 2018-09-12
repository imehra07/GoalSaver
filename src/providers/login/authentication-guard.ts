import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Events } from '@ionic/angular';

@Injectable()
export class AuthenticationGuard implements CanActivate{
  signedIn: boolean = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|boolean {
    return this.signedIn;
  }

  constructor(public router: Router, public events: Events) {
    this.events.subscribe('data:AuthState', async (data) => {
      console.log('received event :::' + data);
      if (data.loggedIn){
        this.signedIn = true;
      } else {
        this.signedIn =false
      }
    })
  }
}
