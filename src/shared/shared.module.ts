import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginModule } from '../pages/login/login.module';

import { IonicModule } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import AWS from 'aws-sdk'
import { AwsProvider } from '../app/aws-provider';
//noinspection TypeScriptCheckImport
//import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

const aws = AWS;
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');
let ddb = new AWS.DynamoDB({
  region: "us-east-1",
  apiVersion: "2012-08-10"
});
const CognitoConfig = {
  region: 'us-east-1',
  IdentityPoolId: '',
  UserPoolId: 'us-east-1_XbFz5B1UF',
  ClientId: '6vmmmk69fvhp9dcu1btcja3d56',
};

export const AmazonCognitoIdentityToken: InjectionToken<String> = new InjectionToken<String>('AmazonCognitoIdentity');
export const CognitoUserPoolToken : InjectionToken<String>= new InjectionToken<String>('CognitoUserPool');
export const CognitoUserAttributeToken: InjectionToken<String> = new InjectionToken<String>('CognitoUserAttribute');
export const CognitoConfigToken: InjectionToken<String> = new InjectionToken<String>('CognitoConfig');
export const poolDataToken: InjectionToken<String> = new InjectionToken<String>('poolData');
export const ddbToken: InjectionToken<String> = new InjectionToken<String>('ddb');
export const AWSToken: InjectionToken<String> = new InjectionToken<String>('AWS');
export const userPoolToken: InjectionToken<String> = new InjectionToken<String>('userPool');
@NgModule({
  declarations: [

  ],
  entryComponents: [],
  imports: [

  ],
  providers: [
    { provide: AWSToken, useValue: aws },
    { provide: AmazonCognitoIdentityToken, useValue: AmazonCognitoIdentity },
    { provide: CognitoConfigToken, useValue: CognitoConfig },
    { provide: ddbToken, useValue: ddb }


  ]
})
export class SharedModule {

}
