import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HelpComponent } from './help/help.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '/help',
    component: HelpComponent,
  },
  { 
    path: '/dashboard',
    component: DashboardComponent,
  },
  { 
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full' 
  },
  { 
  	path: '**',
    component: PageNotFoundComponent 
  }
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, {enableTracing: true}),
  DashboardComponent,
  HelpComponent,
  PageNotFoundComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
