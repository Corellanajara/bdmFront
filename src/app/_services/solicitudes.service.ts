import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class SolicitudesService {

  private url: string = "http://157.230.233.162:4600";

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.url}/solicitudes/`, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  insertar(oferta : any){
    return this.http.post<any[]>(`${this.url}/solicitudes/`, oferta ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  actualizar(id:number,causa : any){
    return this.http.put<any[]>(`${this.url}/causas/${id}`, causa ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }
  borrar(id:string){
    return this.http.delete<any[]>(`${this.url}/solicitudes/${id}` ,{
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    });
  }


}
