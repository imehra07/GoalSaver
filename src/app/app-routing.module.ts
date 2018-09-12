import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from '../pages/login/login';

const routes: Routes = [
  { path: '', component: LoginPage },
  { path: 'tabs', loadChildren: '../pages/tabs/tabs.module#TabsModule' },
  { path: 'login', component: LoginPage }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
