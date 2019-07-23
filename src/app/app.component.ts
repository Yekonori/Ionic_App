import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


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
      title: 'Stories',
      url: '/stories',
      icon: 'bookmark'
    },
    {
      title: 'Characters',
      url: '/all-characters',
      icon: 'person'
    },
    // {
    //   title: 'Classes',
    //   url: '/all-classes',
    //   icon: 'ribbon'
    // }
  ];

  constructor(
    private platform: Platform,
    private menuCtrl: MenuController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.menuCtrl.enable(true);
    });

    if (this.platform.is('cordova')) {
      this.platform.ready().then(() => {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      })
    }
  }
}
