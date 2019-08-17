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
//
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CrearPage } from './ofertas/crear/crear.page';
@NgModule({
  declarations: [ CrearPage,AppComponent],
  entryComponents: [ CrearPage],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    OfertasService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
