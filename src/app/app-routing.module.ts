import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: 'en', loadChildren: () => import('./site/site-en.module').then(m => m.SiteEnModule) }, 
  { path: 'ar', loadChildren: () => import('./site/site-ar.module').then(m => m.SiteArModule) }, 
  { path: 'fr', loadChildren: () => import('./site/site-fr.module').then(m => m.SiteFrModule) }, 
  { path: '**', redirectTo: 'en' },  // redirecting to default route in case of any other prefix
];
const routesProd: Routes = [
  { path: '**', loadChildren: () => import('./site/site.module').then(m => m.SiteModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
