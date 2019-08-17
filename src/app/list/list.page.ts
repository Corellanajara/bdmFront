import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;

  private mostrarOfertas = true;
  private mostrarDemandas = false;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
  ];
  public ofertas: Array<{ title: string; note: string; icon: string }> = [];
  public demandas: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < this.icons.length; i++) {
      this.ofertas.push({
        title: 'Titulo para ofertas numero  ' + i,
        note: 'Precio : $' + (i* Math.floor(Math.random() * 5173 ) ),
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.demandas.push({
        title: 'Titulo único numero  ' + i,
        note: 'Precio : $' + (i* Math.floor(Math.random() * 5173 ) ),
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    console.log("cambie estados");
    this.mostrarDemandas = !this.mostrarDemandas;
    this.mostrarOfertas = !this.mostrarOfertas
  }
}
