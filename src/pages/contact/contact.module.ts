import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact';
import { IonicModule } from '@ionic/angular';

const COMPONENTS =[ ContactPage ];
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:'contact', component: ContactPage}])
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})

export class ContactModule{}
