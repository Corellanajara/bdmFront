import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { ModalController } from '@ionic/angular';

import { LoadingController } from '@ionic/angular';


declare var google;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {
mapRef = null;
localizacion : any ;
  constructor(
    private modalCtrl : ModalController,
    private geolocation: Geolocation,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadMap();
  }

  async loadMap(){
    const loading = await this.loadingCtrl.create();
    loading.present();
    const myLatLng= await this.getLocation();
    this.localizacion = myLatLng;

    console.log(myLatLng);

    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
        console.log("loaded");
        loading.dismiss();
        this.addMarker(myLatLng.lat,myLatLng.lng);
    });

  }


    private addMarker(lat:number, lng:number){
      const marker = new google.maps.Marker({
        position: {lat,lng},
        zoom: 12,
        map: this.mapRef,
        title: 'Hello World!'
      });

    }

    private async getLocation(){
      const respuesta = await this.geolocation.getCurrentPosition();

      return {
        lat: respuesta.coords.latitude,
        lng: respuesta.coords.longitude
      };

    }

    dismiss() {
      console.log("Enviando");
      this.modalCtrl.dismiss(this.localizacion);
    }

    cancel(){
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
      console.log("Cancelando");
      this.modalCtrl.dismiss({
        'dismissed': true
      });
    }







}
