import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'ofertas',
    loadChildren: './ofertas/ofertas.module#OfertasPageModule'
  },
  { path: 'crear', loadChildren: './ofertas/crear/crear.module#CrearPageModule' },
  { path: 'solicitudes', loadChildren: './solicitudes/solicitudes.module#SolicitudesPageModule' },
  { path: 'crear', loadChildren: './solicitudes/crear/crear.module#CrearPageModule' },
  { path: 'ver-solicitud', loadChildren: './list/ver-solicitud/ver-solicitud.module#VerSolicitudPageModule' },
  { path: 'ver-oferta', loadChildren: './list/ver-oferta/ver-oferta.module#VerOfertaPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
