import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from './site.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);


@NgModule({
  declarations: [],
  imports: [
    SiteModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "fr"
    }
  ]
})
export class SiteFrModule { }
