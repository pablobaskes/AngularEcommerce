import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';
import { Vino } from 'src/app/models/vino';
import { PedidoService } from "../../services/pedido.service";
@Component({
  selector: 'app-ejercicip19-p',
  templateUrl: './ejercicip19-p.component.html',
  styleUrls: ['./ejercicip19-p.component.css']
})
export class Ejercicip19PComponent implements OnInit {
  nombreProd : string
  num : number
  compras : Pedido[]
  constructor(private pedidoService: PedidoService) {
    this.num = 0
   }

  ngOnInit(): void {
    
    this.pedidoService.getPedido().subscribe(res=>{
      this.compras = res
    })
  }
  ejer19(){
    let cont = 0
      for(let i = 0; i<this.compras.length;i++){
        let pedido = this.compras[i]
        for(let j = 0; j< pedido.pedido.length; j++){
          let vino = pedido.pedido[j]
          let vinonom = vino.nombre
          if(vino.nombre==this.nombreProd){
          
          this.num +=  vino.cantidad
          console.log(this.num)
          }
        }

      }
  }

}
