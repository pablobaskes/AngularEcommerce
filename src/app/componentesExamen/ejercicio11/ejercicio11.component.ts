import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
import { CarritoService } from "../../services/carrito.service";
import { Vino } from 'src/app/models/vino';
@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css']
})
export class Ejercicio11Component implements OnInit {
  userId : string
  compras : Pedido[]
  comprasUser : Pedido[]
  prds : Vino[]
  constructor(private pedServ : PedidoService, private carrSrv : CarritoService) { }

  ngOnInit(): void {
    this.obtenerId()
    this.pedServ.getPedido().subscribe(res =>{
      this.compras = res
      this.comprasUser = this.compras.filter(compra =>{
        return compra.idUser == this.userId
      })
    })
    this.carrSrv.getPedido().subscribe(res =>{
      this.prds = res
    })
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  ej11(){
    let pedidoAux : Vino[] = []
    let nombsVinos : string[] = []
    this.comprasUser.forEach(compra =>{
      let vinos = compra.pedido
      vinos.forEach(vino =>{
        for(let i = 0; i<this.prds.length;i++){
          if(vino.nombre != this.prds[i].nombre){
            pedidoAux.push(vino)
          }
        }       
      })
    })   
  }
  
}
