import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SitemapPageRoutingModule } from './sitemap-routing.module';

import { SitemapPage } from './sitemap.page';
import { XmlPipe } from 'src/app/xml.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SitemapPageRoutingModule
  ],
  declarations: [SitemapPage, XmlPipe]
})
export class SitemapPageModule {}
