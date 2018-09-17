import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AboutPage } from './about';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../../shared/shared.module';

const COMPONENTS =[ AboutPage];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: 'about', component: AboutPage}]),
    SharedModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class AboutModule{}
