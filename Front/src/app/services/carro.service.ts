import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/Carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private baseUrl = "http://localhost:3000/";
  constructor(private http: HttpClient) { 

  }
  listar(): Observable<Carro[]>{
    return this.http.get<Carro[]>(`${this.baseUrl}carro/listar`);
  }
  cadastrar(carro:Carro): Observable<Carro>{
    return this.http.post<Carro>(`${this.baseUrl}carro/cadastrar`,carro);
  }
  
  apagarCarro(id: string): Observable<Carro[]>{
    return this.http.delete<Carro[]>(`${this.baseUrl}carro/remover/${id}`);
  }
}
