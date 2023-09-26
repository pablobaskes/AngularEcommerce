import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Vino } from 'src/app/models/vino';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ejercicio12',
  templateUrl: './ejercicio12.component.html',
  styleUrls: ['./ejercicio12.component.css']
})
export class Ejercicio12Component implements OnInit {
  userId : string
  miscompras : Pedido[]
  constructor(private pedidoServ : PedidoService) { }

  ngOnInit(): void {

  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  ejercicio12(){
    let ProdSinRepetir : Vino[] = []
    let todosLosVinos : Vino[] = []
    this.obtenerId()
    this.pedidoServ.getPedido().subscribe(pedidos =>{
      this.miscompras = pedidos.filter(comrpas =>{
        return comrpas.idUser == this.userId
      })
      
      for(let i = 0; i<this.miscompras.length;i++){
        this.miscompras[i].pedido.forEach(vino =>{
          
          todosLosVinos.push(vino)
        })
      }
    let vinosSinRepetir =  new Set(todosLosVinos.map(vino =>vino.nombre))
      console.log(vinosSinRepetir)
    })
  }

}
