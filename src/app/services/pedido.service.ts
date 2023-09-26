import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  selectedPedido : Pedido
  pedidos : Pedido[]
  readonly URL_API = "http://localhost:4000/api/pedidos";
  constructor(private http : HttpClient) { 
    
  }
  getPedido(){
    return this.http.get<Pedido[]>(this.URL_API)
  
  }
  postPedido(pedido : Pedido){
    console.log(pedido)
    return this.http.post(this.URL_API, pedido)
  }
}
