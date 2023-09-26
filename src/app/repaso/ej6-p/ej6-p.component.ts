import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ej6-p',
  templateUrl: './ej6-p.component.html',
  styleUrls: ['./ej6-p.component.css']
})
export class Ej6PComponent implements OnInit {
  userId : string
  compras : Pedido[]
  numCompras : number
  constructor(private pedServ : PedidoService) { 
    this.numCompras = 0
  }

  ngOnInit(): void {
    this.obtenerId()
    this.pedServ.getPedido().subscribe(res =>{
      this.compras = res.filter(compra =>{
        return compra.idUser==this.userId
      })
      
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
  recibir(num : number){
    this.numCompras = num
  }
}
