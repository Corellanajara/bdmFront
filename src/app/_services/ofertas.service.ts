import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class OfertasService {
  private testing = false;
  private url: string = "http://157.230.233.162:4600";
  private ofertas = [];
  constructor(private http: HttpClient) { }

  insertar(oferta : any){
    return this.http.post<any[]>(`${this.url}/ofertas/`, oferta ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  listar() {
    return this.http.get<any[]>(`${this.url}/ofertas/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
/*
  listar() {
    if(this.testing){
      return this.ofertas;
    }else{
      return this.http.get<any[]>(`${this.url}/ofertas/`, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
    }
  }
  insertar(oferta : any){
    if(this.testing){
      this.ofertas.push(oferta);
    }else{
      return this.http.post<any[]>(`${this.url}/ofertas/`, oferta ,{
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
    }
  }
  */
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
