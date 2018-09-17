import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { LoginModule } from '../pages/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AwsProvider } from './aws-provider';
import AWS from 'aws-sdk'
import { SharedModule } from '../shared/shared.module';
//noinspection TypeScriptCheckImport
//import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
@NgModule({
  declarations: [
    MyApp
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    LoginModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    AwsProvider
  ],
  bootstrap: [MyApp]
})
export class AppModule {

}
