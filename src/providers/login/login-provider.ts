import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class LoginProvider{


  constructor() {
    console.log('Hello LoginProvider Provider');
  }

  public signup() {
    //var CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
  }

}
