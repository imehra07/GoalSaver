import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home';
import { SharedModule } from '../../shared/shared.module';

const COMPONENTS = [ HomePage ];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage },{ path: 'home', component: HomePage }]),
    SharedModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class HomePageModule {}
