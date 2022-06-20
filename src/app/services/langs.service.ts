import { DOCUMENT, getLocaleId, Location } from '@angular/common';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { SiteArModule } from '../site/site-ar.module';
import { SiteModule } from '../site/site.module';
@Injectable({
  providedIn: 'any'
})
export class LangsService {
  languages: string[] = ["en", "ar", "fr"];
  languagesMap: any = {
    "en": "en-US",
    "ar": "ar-EG",
    "fr": "fr-FR"
  };
  currentLangId = this.locale;
  _currentLangId = this.currentLangId;
  constructor(private translateService: TranslateService, private route: ActivatedRoute, private router: Router, @Inject(LOCALE_ID) public locale: string,  @Inject(DOCUMENT) private document: Document, private location: Location) {

    this.translateService.use(this.locale);
    this.document.documentElement.dir = this.currentLangId == "ar" ? "rtl" : "ltr";
    console.log("firsttttt");

    console.log("langsssss", this.locale, this.currentLangId, this.translateService.currentLang);

    // document.documentElement.dir = this.currentLangId == "ar" ? "rtl" : "ltr";
    
  }

  switchLanguage(ev) {
    const langId = ev.detail.value;

    // this.currentLangId= langId;
    // window.location.reload();
    // const hrefArr = window.location.href.split("/");
    const oldLang = this.currentLangId;
    // this.currentLangId = langId;

    console.log("old", oldLang, "new", langId);
    console.log(this.currentLangId, this.router.url);
    // this.translateService.use(langId);
    // document.documentElement.dir = langId == "ar" ? "rtl" : "ltr";
    
    this.location.replaceState(window.location.pathname.replace(oldLang, langId));
    this.translateService.use(langId);
      this.currentLangId = langId;
      this.document.documentElement.dir = this.currentLangId == "ar" ? "rtl" : "ltr";

    // const reuse = this.router.routeReuseStrategy.shouldReuseRoute;
    //   this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //   this.router.navigated = false;
    //   this.router.navigateByUrl(this.router.url.replace(oldLang, langId)).then(() => {
    //     this.router.routeReuseStrategy.shouldReuseRoute = reuse;
    //   });


    //this.router.navigateByUrl(this.router.url.replace(oldLang, langId));
    // window.location.reload();
    // const hrefArr = window.location.href.split("/");
    // hrefArr[3] = langId;
    // console.log(langId, hrefArr);


    // window.location.replace(hrefArr.join("/"));
  }
}

export interface Lang {
  code: string;
  id: string;
}