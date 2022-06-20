import { Component, OnInit } from '@angular/core';
import { LangsService } from '../services/langs.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {

  constructor(public  langs: LangsService) { }

  ngOnInit() {}

}
