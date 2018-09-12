import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { TabsPage } from './tabs';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { LoginProvider } from '../../providers/login/login-provider';
import { ContactPage } from '../contact/contact';
import { AuthenticationGuard } from '../../providers/login/authentication-guard';
import { SetupPage } from '../setup/setup';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage,
        canActivate: [AuthenticationGuard]
      },
      {
        path: 'setup',
        outlet: 'setup',
        component: SetupPage,
        canActivate: [AuthenticationGuard]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
