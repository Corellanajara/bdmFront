import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular';
import {  CrearSolicitudPage } from './crear/crear.page';
import { SolicitudesService } from '../_services/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.page.html',
  styleUrls: ['./solicitudes.page.scss'],
})
export class SolicitudesPage implements OnInit {

  private items = [];
  private minimo = 0;
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  constructor(private solicitudService : SolicitudesService ,private modalController : ModalController) { }
  refresh(){
    this.solicitudService.listar().subscribe(data=>{
      console.log(data);
      this.items = data;
    }, (error) => {
      console.log(error);
    })
  }
  ngOnInit() {
    this.refresh();
  }
  verData(data){
    this.solicitudService.borrar(data._id).subscribe(response=>{
      console.log("mensaje",response);
      this.refresh();
    })
  }
  doRefresh(event) {
    this.solicitudService.listar().subscribe(data=>{

      this.items = data.sort(function(a, b) {
        if (a.precio < b.precio) {
          return 1;
        }
        if (a.precio > b.precio) {
          return -1;
        }
      });
      event.target.complete();
    }, (error) => {
      console.log(error);
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component:  CrearSolicitudPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        'datos': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
}
