import { NgModule, ModuleWithProviders } from '@angular/core';
import { LoginPage } from './login';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginProvider } from '../../providers/login/login-provider';
import { AmplifyAngularModule, AmplifyIonicModule, AmplifyService } from 'aws-amplify-angular';
import { IonicModule } from '@ionic/angular';
import { AuthenticationGuard } from '../../providers/login/authentication-guard';

const COMPONENTS =[ LoginPage];
@NgModule({
  imports:[
    IonicModule,
    CommonModule,
    FormsModule,
    AmplifyAngularModule,
    AmplifyIonicModule,
    RouterModule.forChild([{ path: '', component: LoginPage }])
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class LoginModule {
  constructor(){}

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [
        LoginProvider,
        AuthenticationGuard,
        AmplifyService
      ]
    }
  }
}
