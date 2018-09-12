import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SetupPage } from './setup';

const COMPONENTS = [ SetupPage ];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: 'setup', component: SetupPage }])
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SetupPageModule {}
