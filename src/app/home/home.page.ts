import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private Titulo = "hola mundo";
  private Titulo2 = "otro mensaje";
  private flag = true;
  constructor() {}

}
