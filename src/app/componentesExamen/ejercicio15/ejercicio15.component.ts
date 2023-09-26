import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ejercicio15',
  templateUrl: './ejercicio15.component.html',
  styleUrls: ['./ejercicio15.component.css']
})
export class Ejercicio15Component implements OnInit {
  userId : string
  pedido : Pedido[]
  prod : string
  cant : number
  comprasUser : Pedido[]
  constructor(private pedSrv : PedidoService) { 
    this.prod = ''
    this.cant = 0
  }

  ngOnInit(): void {
    this.obtenerId()
    this.pedSrv.getPedido().subscribe(res =>{
      this.pedido = res
      this.comprasUser = this.pedido.filter(compra =>{
        return compra.idUser == this.userId
      })
    })
  }
  buscar(){
    this.pedido.forEach(compra => {
      compra.pedido.forEach(vino => {
        if(vino.nombre == this.prod){
          this.cant += 1
        }
      });
    });
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  buscarDelUsuario(){
    this.comprasUser.forEach(compra => {
      compra.pedido.forEach(vino => {
        if(vino.nombre == this.prod){
          this.cant += 1
        }
      });
    });
  }

}
