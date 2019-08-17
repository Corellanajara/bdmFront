import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OfertasPage } from './ofertas.page';

import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: OfertasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OfertasPage]
})
export class OfertasPageModule {}
