import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ej5',
  templateUrl: './ej5.component.html',
  styleUrls: ['./ej5.component.css']
})
export class Ej5Component implements OnInit {
  userId : string
  compras : Pedido[]
  mensaje : string
  constructor(private pedSrv : PedidoService) { 
    this.mensaje = ''
  }

  ngOnInit(): void {
    this.obtenerId()
    this.pedSrv.getPedido().subscribe(res =>{
      this.compras = res.filter(compra =>{
        return compra.idUser == this.userId
      })
      console.log(this.compras.length)
      if(this.compras.length > 0){
        this.mensaje = 'Usted no es la primera vez que compra'
      }else{
        this.mensaje = 'Bienvenido'
      }
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
}
