import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class OfertasService {

  private url: string = "http://167.71.160.73:4600/";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/ofertas/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(oferta : any){
    return this.http.post<any[]>(`${this.url}/ofertas/`, oferta ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,causa : any){
    return this.http.put<any[]>(`${this.url}/causas/${id}`, causa ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string){
    return this.http.delete<any[]>(`${this.url}/ofertas/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
