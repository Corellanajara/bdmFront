import { Component, OnInit } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
import { OfertasService } from '../../_services/ofertas.service';
import { ToastController , AlertController } from '@ionic/angular';
import { MapaPage } from './mapa/mapa.page';

interface Oferta {
  titulo : string,
  direccion : string,
  fechaExpiracion : string,
  fechaDespacho : string,
  materiales : any,
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

  public oferta : Oferta = {titulo:'',direccion:'',fechaExpiracion:'',materiales:[],fechaDespacho:'',tipo:0,usuario:''};
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  public materiales = [{nombre:'Tierra',unidad:'m3'},{nombre:'Áridos puros',unidad:'kilo'},{nombre:'Áridos mezclados',unidad:'kilo'},{nombre:'Hormigón',unidad:'m3'},{nombre:'Asfaltos',unidad:'m3'},{nombre:'Vibrados',unidad:'kilo'}];
  public material = '';
  constructor(public alertController: AlertController,public toastController: ToastController,private ofertasService:OfertasService,private modalCtrl : ModalController,private navParams: NavParams) {
   }

  ngOnInit() {
  }
  public addOferta(){
    this.ofertasService.insertar(this.oferta).subscribe( response => {
      console.log(response);
      this.dismiss();
    })
  }
  public addMaterial(){

    for(let i = 0 ; i < this.materiales.length; i++){
      let material = this.materiales[i].nombre;
      if(material == this.material){
        this.oferta.materiales.push(this.material);
        this.material = '';
        return 0;
      }
      if(i == (this.materiales.length - 1 ) ){
        this.material = '';
        this.presentToast("No se encuentra entre los materiales soportados");
      }
    }

  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async confirm(i) {
   const alert = await this.alertController.create({
     header: 'Confirmar',
     message: 'Estas apunto de <strong>eliminar</strong> este material!!!',
     buttons: [
       {
         text: 'Cancelar',
         role: 'cancel',
         cssClass: 'secondary',
         handler: (blah) => {
           this.presentToast("Se ha cancelado correctamente");
           console.log('Cancelao');
         }
       }, {
         text: 'Eliminar',
         cssClass: 'danger',
         handler: () => {
           this.oferta.materiales.splice(i,1);
           this.presentToast("Eliminado correctamente");

         }
       }
     ]
   });

   await alert.present();
 }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
  public listar(oferta){
    return oferta.materiales;
  }
  async mostrarModalMapa() {
    const modal = await this.modalCtrl.create({
      component: MapaPage,
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
