import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  /**
   * Définit toutes les pages de l'App
   * 
   */
  public appPages = [
    {
      title: 'Characters',
      url: '/all-characters',
      icon: 'person'
    },
    {
      title: 'Black Eagles Characters',
      url: '/houses-characters/blackEagles',
      icon: 'person'
    },
    {
      title: 'Blue Lions Characters',
      url: '/houses-characters/blueLions',
      icon: 'person'
    },
    {
      title: 'Golden Deer Characters',
      url: '/houses-characters/goldenDeer',
      icon: 'person'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
