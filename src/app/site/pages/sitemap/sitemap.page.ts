import { Component, OnInit } from '@angular/core';
import { SitemapService } from 'src/app/services/sitemap.service';

@Component({
  selector: 'app-sitemap',
  templateUrl: './sitemap.page.html',
  styleUrls: ['./sitemap.page.scss'],
})
export class SitemapPage implements OnInit {

  sitemapText;
  constructor(private sitemap: SitemapService) { }

  ngOnInit() {
    this.sitemap.getSiteMap()
    .subscribe((data) => {
      console.log(data);
      this.sitemapText= data;
      
    });
  }

}
