import { Component, OnInit } from '@angular/core';
import { CarritoService } from "../../services/carrito.service";
import { Vino } from "../../models/vino";
import { Producto } from "../../models/productoCarrito";
import { UsuarioServiceService } from "../../services/usuario-service.service";
import { Router } from "@angular/router";
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from "../../services/pedido.service";

@Component({
  selector: 'app-carrito-details',
  templateUrl: './carrito-details.component.html',
  styleUrls: ['./carrito-details.component.css']
})
export class CarritoDetailsComponent implements OnInit {
  userId : string 
  pedido : Vino[]
  precioTotal : number
  pededioAux : Producto
  compra : Pedido
  
  constructor(
  private carritoService : CarritoService, 
  private userService : UsuarioServiceService,
  private pedirService : PedidoService,
  private router : Router
  ){ 
    this.precioTotal = 0
    this.pedido = []

  }
  ngOnInit(): void {
    this.carritoService.getPedido().subscribe((pedidoRecibido)=>{
      this.pedido = [...pedidoRecibido];
      console.log(this.pedido)
      this.pedido.forEach((vino)=>{
        this.precioTotal = this.precioTotal + vino.precioTotal
      })
    }) 
    this.obtenerId()
  }

  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
  comprar(){
    this.compra = {
      _id:'',
      pedido:this.pedido,
      idUser:this.userId
    }
    this.pedirService.postPedido(this.compra).subscribe()
    alert('Gracias por su compra!')
    this.router.navigate(['/vinos'])
  }
  
 
}
