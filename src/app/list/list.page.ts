import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OfertasService } from '../_services/ofertas.service';
import { SolicitudesService } from '../_services/solicitudes.service';
import { VerOfertaPage } from './ver-oferta/ver-oferta.page';

interface Oferta {
  titulo : string,
  direccion : string,
  fechaExpiracion : string,
  fechaDespacho : string,
  materiales : any,
  tipo : number,
  usuario : string
}
interface Solicitud {
  material : string,
  direccion : string,
  usuario : string
}

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  private mostrarOfertas = true;
  private mostrarDemandas = false;

  public ofertas = [];
  public demandas = [];
  constructor(private modalCtrl : ModalController,private serviciosService : SolicitudesService , private ofertasService : OfertasService ) {
    this.bringOfertas();
    this.bringSolicitudes();
  }
  public bringOfertas(){
    this.ofertasService.listar().subscribe(data=>{

      this.ofertas = data;
    }, (error) => {
      console.log(error);
    })
  }
  public bringSolicitudes(){
    this.serviciosService.listar().subscribe(data=>{

      this.demandas = data;
    }, (error) => {
      console.log(error);
    })
  }
  async abrirOferta(oferta) {
    const modal = await this.modalCtrl.create({
      component:  VerOfertaPage,
      componentProps: {
        'oferta': oferta,
      }
    });
    return await modal.present();
  }
  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log("cambie estados");
    this.mostrarDemandas = !this.mostrarDemandas;
    this.mostrarOfertas = !this.mostrarOfertas
  }
}
