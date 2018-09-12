import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsPageRoutingModule } from './tabs.router.module';
import { TabsPage } from './tabs';
import { IonicModule } from '@ionic/angular';
import { HomePageModule } from '../home/home.module';
import { ContactModule } from '../contact/contact.module';
import { AboutModule } from '../about/about.module';
import { SetupPageModule } from '../setup/setup.module';
import { LabelsProvider } from '../../providers/login/labels-provider';

const COMPONENTS =[ TabsPage ];

@NgModule({
  imports: [
    IonicModule.forRoot(),
    CommonModule,
    FormsModule,
    HomePageModule,
    ContactModule,
    AboutModule,
    SetupPageModule,
    TabsPageRoutingModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
  providers: [LabelsProvider]
})

export class TabsModule{}
