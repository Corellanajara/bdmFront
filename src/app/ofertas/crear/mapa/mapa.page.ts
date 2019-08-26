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
coordenadaCentro=null;
localizacion : any ;
centro: any;


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

    var myLatLng= await this.getLocation();
    console.log(myLatLng);

    const mapEle: HTMLElement = document.getElementById('map');
    this.mapRef = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12,
      //disableDefaultUI: true
    });


    google.maps.event
    .addListenerOnce(this.mapRef, 'idle', () => {
        loading.dismiss();
        var marker = new google.maps.Marker({
          position: myLatLng,
          zoom: 12,
          map: this.mapRef,
          title: 'Hello World!'
        });
        marker.bindTo('position', this.mapRef, 'center');
        //this.addMarker(myLatLng.lat,myLatLng.lng);
        //markers.push(marker);


    });


    google.maps.event.
    addListener(this.mapRef, 'center_changed', () =>{
    //  this.myLatLng= this.mapRef.getCenter();
    //console.log("myLatLng:"+this.myLatLng.lat()+ "," + this.myLatLng.lng());
    //  this.localizacion = this.myLatLng;
      this.centro= this.mapRef.getCenter();
      console.log("localizacion:"+this.centro.lat()+ "," + this.centro.lng());
      this.localizacion={
        lat : this.centro.lat(),
        lng : this.centro.lng(),
      }
    });



  }


    private addMarker(lat:number, lng:number){
      var marker = new google.maps.Marker({
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
