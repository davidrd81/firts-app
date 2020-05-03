import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MaterialModule } from './material.module'

// RUTAS
import { AppRoutingModule } from './app-routing.module';

// componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { BitacoraService } from './services/bitacora.service';
import { BitacoraPopupComponent } from './preview/bitacora-popup/bitacora-popup.component';
import { TurnoService } from './services/turno.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    BitacoraComponent,
    BitacoraPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [ {provide: APP_BASE_HREF, useValue : '/' }, BitacoraService, TurnoService ],
  bootstrap: [AppComponent],
  entryComponents: [BitacoraPopupComponent, HomeComponent]
})
export class AppModule { }
