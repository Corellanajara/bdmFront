import { Component, OnInit } from '@angular/core'
import { ModalController } from '@ionic/angular';
import { CrearPage } from './crear/crear.page';
import { OfertasService } from '../_services/ofertas.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.page.html',
  styleUrls: ['./ofertas.page.scss'],
})
export class OfertasPage implements OnInit {

  private items = [];
  private minimo = 0;
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  constructor(private ofertasService : OfertasService ,private modalController : ModalController) { }
  refresh(){
    this.ofertasService.listar().subscribe(data=>{
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
    this.ofertasService.borrar(data._id).subscribe(response=>{
      console.log("mensaje",response);
      this.refresh();
    })
  }
  doRefresh(event) {
    this.ofertasService.listar().subscribe(data=>{

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
      component: CrearPage,
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
