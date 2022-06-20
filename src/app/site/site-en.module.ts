import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from './site.module';



@NgModule({
  declarations: [],
  imports: [
    SiteModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en"
    }
  ]
})
export class SiteEnModule { }
