import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from './site.module';
import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar';
registerLocaleData(localeAr);


@NgModule({
  declarations: [],
  imports: [
    SiteModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "ar"
    }
  ]
})
export class SiteArModule { }
