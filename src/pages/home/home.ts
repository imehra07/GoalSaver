import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LabelsProvider } from '../../providers/login/labels-provider';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{

  constructor(public navCtrl: NavController, private labelsProvider: LabelsProvider) {

  }

  ngOnInit() {
    this.labelsProvider.getLabelsForUser();
  }


}
