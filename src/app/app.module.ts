import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { LoginModule } from '../pages/login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AwsProvider } from './aws-provider';

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
export class AppModule {}
