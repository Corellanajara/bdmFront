import { Component, OnInit } from '@angular/core';
import { NavParams , ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ver-oferta',
  templateUrl: './ver-oferta.page.html',
  styleUrls: ['./ver-oferta.page.scss'],
})
export class VerOfertaPage implements OnInit {
  mio = false;
  oferta : any;
  public tipoResiduo = ["Demolición","Limpieza de terreno","Excavación","Construcción de edificaciones","Construcción de obras civiles","Construcción de represas y obras hidráulicas","Construcción de puertos y aeropuertos","Obras mineras","Producción de materiales para la construcción"];
  constructor(private modalCtrl : ModalController,private navParams : NavParams) {
    this.oferta = navParams.get('oferta');
    console.log(this.oferta);
  }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
