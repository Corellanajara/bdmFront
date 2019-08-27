import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SolicitudesPage } from './solicitudes.page';

import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  {
    path: '',
    component: SolicitudesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SolicitudesPage]
})
export class SolicitudesPageModule {}
