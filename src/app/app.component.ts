import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { SplashScreen } from '@awesome-cordova-plugins/splash-screen/ngx';
import { StatusBar } from '@awesome-cordova-plugins/status-bar/ngx';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LangsService } from './services/langs.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    private router: Router,
    private langs: LangsService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    // this.router.events
    //   .pipe(
    //     filter(event => event instanceof NavigationEnd)
    //   )
    //   .subscribe(
    //     (event: NavigationEnd) => {
    //       console.log(event.url);

    //       this.langs.currentRoute = event.url;
    //     }
    //   );

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.log("initttt", this.translate.currentLang);
    });
  }
}
