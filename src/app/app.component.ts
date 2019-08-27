import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Listar',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Mis Ofertas',
      url: '/ofertas',
      icon: 'analytics'
    },
    {
      title: 'Mis Solicitudes',
      url: '/solicitudes',
      icon: 'mail-open'
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
