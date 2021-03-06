import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterLink } from '@angular/router';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppSearchBarComponent } from './app-search-bar/app-search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppSearchBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

