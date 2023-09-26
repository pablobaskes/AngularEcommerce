import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ejercicio16-p',
  templateUrl: './ejercicio16-p.component.html',
  styleUrls: ['./ejercicio16-p.component.css']
})
export class Ejercicio16PComponent implements OnInit {
  nomProducto : string
  pedidosAux : Pedido[]
  pedidosMandar : string[]
  constructor(private pedidoService : PedidoService) { 
    this.pedidosAux = []
    this.pedidosMandar = []
  }

  ngOnInit(): void {
    this.pedidoService.getPedido().subscribe(res => this.pedidosAux = res)
  }

  comprobar(){
   for(let i = 0; i<this.pedidosAux.length;i++){
    let pedido = this.pedidosAux[i]
    for(let j = 0; j < pedido.pedido.length;j++){
      if(pedido.pedido[j].nombre == this.nomProducto){
        this.pedidosMandar.push(pedido.idUser)
      }
    }
   }
   
  }

}
