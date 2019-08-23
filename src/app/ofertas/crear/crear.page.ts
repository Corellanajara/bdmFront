import { Component, OnInit } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
import { OfertasService } from '../../_services/ofertas.service';
import { MapaPage } from './mapa/mapa.page';

interface Oferta {
  titulo : string,
  direccion : string,
  fechaExpiracion : string,
  fechaDespacho : string,
  tipo : number,
  usuario : string
}

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {
  //public oferta = {titulo:'',precio:0,autor:''};

  public oferta : Oferta = {titulo:'',direccion:'',fechaExpiracion:'',fechaDespacho:'',tipo:0,usuario:''};
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  constructor(private ofertasService:OfertasService,private modalCtrl : ModalController,private navParams: NavParams) {
   }

  ngOnInit() {
  }
  public addOferta(){

    this.ofertasService.insertar(this.oferta).subscribe( response => {
      console.log(response);
      this.dismiss();
    })

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  async mostrarModalMapa() {
    const modal = await this.modalCtrl.create({
      component: MapaPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'datos': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    modal.onDidDismiss().then(modal=>{
      //console.log("en crear",modal);
       if(modal.data.dismissed){
        console.log("Se cerro el modal");
       }else{
        console.log("Se enviaron datos",modal);
        let lat = modal.data.lat;
        let lng = modal.data.lng;
        this.oferta.direccion = lat +","+lng;
      }
    });
    return await modal.present();
  }


}
