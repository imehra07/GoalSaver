import { Injectable, Inject } from '@angular/core';
//noinspection TypeScriptCheckImport
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk'
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
import { ddbToken, CognitoConfigToken, AWSToken } from '../shared/shared.module';

@Injectable()
export class AwsProvider {

  private data: {loggedIn: boolean,  credentials: AWS.CognitoIdentityCredentials };
  constructor(public router: Router, public events: Events, @Inject(ddbToken) private ddb: any, @Inject(CognitoConfigToken) private cognitoConfig: any,@Inject(AWSToken) private aws: any) {
    this.events.subscribe('data:AuthState', async (data) => {
      console.log('received event :::' + data);
      this.data = data;
    })
  }

  getDDBInstance() {
    if (this.data.loggedIn){
      this.ddb = new this.aws.DynamoDB({
        region: 'us-east-1', credentials: new this.aws.CognitoIdentityCredentials({
          IdentityPoolId: this.cognitoConfig.IdentityPoolId
        })
      });
    }
    return this.ddb;
  }
  getPoolData() {
    return {
      UserPoolId: this.cognitoConfig.UserPoolId,
      ClientId: this.cognitoConfig.ClientId
    };
  }
  getUserPool() {
    return new CognitoUserPool(this.getPoolData());
  }
}
