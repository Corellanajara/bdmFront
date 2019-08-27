import { Component, OnInit } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
import { SolicitudesService } from '../../_services/solicitudes.service';
import { ToastController , AlertController } from '@ionic/angular';


interface Solicitud {
  material : string,
  direccion : string,
  usuario : string
}

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearSolicitudPage implements OnInit {
  //public oferta = {titulo:'',precio:0,autor:''};

  public solicitud : Solicitud = {material:'',direccion:'',usuario:''};
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  public materiales = [{nombre:'Tierra',unidad:'m3'},{nombre:'Áridos puros',unidad:'kilo'},{nombre:'Áridos mezclados',unidad:'kilo'},{nombre:'Hormigón',unidad:'m3'},{nombre:'Asfaltos',unidad:'m3'},{nombre:'Vibrados',unidad:'kilo'}];
  public material = '';
  constructor(public alertController: AlertController,public toastController: ToastController,private solicitudService:SolicitudesService,private modalCtrl : ModalController,private navParams: NavParams) {
   }

  ngOnInit() {
  }
  public addSolicitud(){
    this.solicitudService.insertar(this.solicitud).subscribe( response => {
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
}
