import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {

  constructor(platform: Platform, statusBar: StatusBar) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    });
  }
}
