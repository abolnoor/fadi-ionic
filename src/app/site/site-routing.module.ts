import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { SiteComponent } from './site.component';

const routesChildren: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'second',
    loadChildren: () => import('./pages/second/second.module').then(m => m.SecondPageModule)
  }
];

const routes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: routesChildren
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
