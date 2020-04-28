import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// RUTAS
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { BitacoraService } from './services/bitacora.service';
import { BitacoraPopupComponent } from './preview/bitacora-popup/bitacora-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BitacoraComponent,
    BitacoraPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ {provide: APP_BASE_HREF, useValue : '/' }, BitacoraService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
