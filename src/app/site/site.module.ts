import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [SiteComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiteRoutingModule,
    TranslateModule,
    SwiperModule
  ],
  exports: [CommonModule]
})
export class SiteModule { }
