import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SitemapService {

  constructor(private http: HttpClient) { }

  getSiteMap(): Observable<string> {
    return this.http.get(`/api/app/feed/398b2f1f-846c-89b8-64e9-39ff1119903c/sitemap.xml`, { responseType: 'text' })
  }
}
