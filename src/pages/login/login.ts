import { Component, NgZone, OnDestroy } from '@angular/core';
import { User } from '../../model/user';
import { Events } from '@ionic/angular';
import { AmplifyService } from 'aws-amplify-angular';
import { LoginProvider } from '../../providers/login/login-provider';
import { AuthenticationGuard } from '../../providers/login/authentication-guard';
import { AppConstants } from '../../app/app-constants';
import { AwsProvider } from '../../app/aws-provider';
import { Subject, Observable, Subscription, BehaviorSubject } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import AWS from 'aws-sdk'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnDestroy{
  private loginUser:User = new User;
  private newUser: boolean = false;
  private authState: {loggedIn: boolean,  credentials: AWS.CognitoIdentityCredentials };
  private cognitoUser: any;
  private newUserSubscription: Subscription;
  constructor(public events: Events,
              public authenticationGuard: AuthenticationGuard,
              public amplifyService: AmplifyService,
              public awsProvider: AwsProvider,
              private ngZone: NgZone,
              private route : ActivatedRoute,
              private router: Router) {

    this.authState = {loggedIn: false, credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: ''
    })};

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState.loggedIn = authState.state === 'signedIn';
        console.log('publishing event :::' + this.authState);
        this.events.publish('data:AuthState', this.authState)
      });
  }

  ngAfterContentInit(){
    console.log('publishing event :::' + this.authState);
    this.events.publish('data:AuthState', this.authState);
  }
  private authenticate() {
    this.cognitoUser = new this.awsProvider.AmazonCognitoIdentity.CognitoUser({
      Username: this.loginUser.username,
      Pool: this.awsProvider.userPool
    });

    var authenticationData = {
      Username : this.loginUser.username,
      Password : this.loginUser.password,
    };
    var authenticationDetails = new this.awsProvider.AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    this.cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        // User authentication was successful
        console.log("success " + result);
        this.authState.credentials.IdentityPoolId = result.IdentityId;
        this.router.navigate(['tabs'], {relativeTo: this.route});
      }.bind(this),

      onFailure: function(err) {

        console.log("error " + err);
        if(err.code == AppConstants.USER_NOT_FOUND) {
          this.newUser = true;
        }
        if(err.code == AppConstants.NO_MFA_SETUP) {
            //TBD
        }

      }.bind(this),

      mfaRequired: function(codeDeliveryDetails) {

        console.log("MFA required " + codeDeliveryDetails);
        //this.cognitoUser.sendMFACode(mfaCode, this)
      }.bind(this),

      newPasswordRequired: function (userAttributes, requiredAttributes) {
        console.log("new password required " + userAttributes + requiredAttributes);
      }.bind(this)
    });
  }
  private signUp() {

    this.amplifyService.auth().signUp(this.loginUser.username,this.loginUser.password, this.loginUser.email).then((user)=>{
      this.cognitoUser = new this.awsProvider.AmazonCognitoIdentity.CognitoUser({
        Username: this.loginUser.username,
        Pool: this.awsProvider.userPool
      });
      console.log('after sign up ' + user);

      this.amplifyService.setAuthState({ state: 'confirmSignUp', user: this.cognitoUser });
        var verificationCode = prompt('Please input verification code: ' ,'');
         this.cognitoUser.confirmRegistration(verificationCode,true,this.postRegistration.bind(this));
    },
    err=> {
      console.log(err);
    })
  }
  private postRegistration(result) {
    this.amplifyService.setAuthState({ state: 'signedIn', user:  this.cognitoUser});
    this.router.navigate(['tabs','setup'], {relativeTo: this.route});
  }

  ngOnDestroy(){
    this.newUserSubscription.unsubscribe();
  }
}
