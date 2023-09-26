import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ejercicio6-p',
  templateUrl: './ejercicio6-p.component.html',
  styleUrls: ['./ejercicio6-p.component.css']
})
export class Ejercicio6PComponent implements OnInit {
  pedidos :Pedido[]
  numPedido : number
  constructor(private pedidoService : PedidoService) {
    this.pedidos = []
   }

  ngOnInit(): void {
    
  }

   mandarDatos(){
    let iduser = localStorage.getItem('userId')
     this.pedidoService.getPedido().subscribe(res =>{
      this.pedidos = res.filter(pedido=>{
        return pedido.idUser===iduser
      })
      console.log(this.pedidos)
    })
  }

  recibirDatos(numero : number){
    alert(numero)
  }

}
