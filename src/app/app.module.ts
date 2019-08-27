import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FormsModule } from '@angular/forms';
// providers
import { HttpClientModule } from '@angular/common/http';
import { OfertasService } from './_services/ofertas.service';
import { SolicitudesService } from './_services/solicitudes.service';
//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearPage } from './ofertas/crear/crear.page';
import { CrearSolicitudPage } from './solicitudes/crear/crear.page';
import { VerOfertaPage } from './list/ver-oferta/ver-oferta.page';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapaPage } from './ofertas/crear/mapa/mapa.page';


@NgModule({
  declarations: [ CrearPage,MapaPage,VerOfertaPage, CrearSolicitudPage,AppComponent],
  entryComponents: [ CrearPage,MapaPage,VerOfertaPage, CrearSolicitudPage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SolicitudesService,
    OfertasService,
    SplashScreen,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
