import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/pedido';
import { Vino } from '../models/vino';
import { PedidoService } from "../services/pedido.service";
import { MiscomprasPipe } from "../pipes/miscompras.pipe";
@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.component.html',
  styleUrls: ['./mis-compras.component.css']
})
export class MisComprasComponent implements OnInit {
  userId : string
  pedidos : Pedido[]
  vinos : Vino[]
  numeroPedido : number
  numCompras : number
  pedidoAux : Pedido[]
  constructor(private pedidoService: PedidoService) { 
    this.numeroPedido = 0
    this.vinos=[]
    this.pedidoAux = []
  }

  ngOnInit(): void {
    
  }
  verpedidos(){
    this.obtenerId()
    this.obtenerPedidos()
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  obtenerPedidos(){
    let userId = localStorage.getItem('userId');
    
    this.pedidoService.getPedido().subscribe((res)=>{
      
      this.pedidos = res    
      this.pedidos.forEach(pedido=>{
 
         this.pedidoAux = this.pedidos.filter(pedidoLog =>{
          return pedidoLog.idUser == userId
        })
      })
      this.numCompras = this.pedidoAux.length
    }) 
  }
  recibir(informe : string){
    alert(informe)
  }
}
