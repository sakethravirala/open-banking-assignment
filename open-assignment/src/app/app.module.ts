/*
 * Copyright (C) - All Rights Reserved
 * Written by Saketh Ravirala
 * Unauthorized use or copying of this file, via any medium is strictly prohibited and will be subject to legal action.
 * Proprietary and confidential
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BackgroundComponent } from './background/background.component';
import { HomeComponent } from './home/home.component';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CurrencyMaskModule } from "ng2-currency-mask";
import { FormsModule } from '@angular/forms';
import { Home2Component } from './home2/home2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BackgroundComponent,
    HomeComponent,
    Home2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapSliderModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    CurrencyMaskModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
