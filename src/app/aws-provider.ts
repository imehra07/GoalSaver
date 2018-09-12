import { Injectable } from '@angular/core';
//noinspection TypeScriptCheckImport
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import AWS from 'aws-sdk'
import { Router } from '@angular/router';
import { Events } from '@ionic/angular';
@Injectable()
export class AwsProvider {
  AmazonCognitoIdentity = require('amazon-cognito-identity-js');
  CognitoUserPool = this.AmazonCognitoIdentity.CognitoUserPool;
  CognitoUserAttribute = this.AmazonCognitoIdentity.CognitoUserAttribute;
  CognitoConfig = {
    region: 'us-east-1',
    IdentityPoolId: '',
    UserPoolId: 'us-east-1_XbFz5B1UF',
    ClientId: '6vmmmk69fvhp9dcu1btcja3d56',
  };
  poolData = {
  UserPoolId: this.CognitoConfig.UserPoolId,
  ClientId: this.CognitoConfig.ClientId
};
  userPool = new CognitoUserPool(this.poolData);
  ddb: AWS.DynamoDB;

  constructor(public router: Router, public events: Events) {
    this.events.subscribe('data:AuthState', async (data) => {
      console.log('received event :::' + data);
      if (data.loggedIn){
        this.ddb = new AWS.DynamoDB({region: 'us-east-1', credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: data.IdentityPoolId
        })
        });
      }
    })
  }
}
