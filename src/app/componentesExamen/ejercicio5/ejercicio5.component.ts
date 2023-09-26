import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ejercicio5',
  templateUrl: './ejercicio5.component.html',
  styleUrls: ['./ejercicio5.component.css']
})
export class Ejercicio5Component implements OnInit {
  pedidos : Pedido[]
  
  constructor(private pedidoService:PedidoService) { 
    
  }

  ngOnInit(): void {
    
    this.pedidoService.getPedido().subscribe(res => {
      this.pedidos = res
       this.mostrar()
    
    })

  }
  mostrar(){
    let id = localStorage.getItem('userId')
    
     let tieneId =   this.pedidos.filter(pedido=>{
      return pedido.idUser === id
    })
    let mensaje : string
    if(tieneId.length>0){
      mensaje = "Usted no es la primera vez que compra"
    }else{
      mensaje = "Bienvenido"
    }
    

  }

}
