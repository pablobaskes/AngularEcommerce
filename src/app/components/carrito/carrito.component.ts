import { Component, OnInit } from '@angular/core';
import { CarritoService } from "../../services/carrito.service";
import { Vino } from "../../models/vino";
import { Producto } from "../../models/productoCarrito";
import { UsuarioServiceService } from "../../services/usuario-service.service";
import { Router } from "@angular/router";
import { Pedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  pedido : Vino[]
  precioTotal : number
  compra : Pedido
  compras : Pedido[]
  miscompras : Pedido[]
  vinosEnCarrito : Vino[] = []
  userId : string
  
  vinosAux: Vino[]
  
  constructor(
  private carritoService : CarritoService, 
  private userService : UsuarioServiceService,
  private router : Router,
  private pedirService : PedidoService
  ){ 
    this.precioTotal = 0
    this.vinosAux = []
    
  }
  ngOnInit(): void {
    this.obtenerId()
    this.pedirService.getPedido().subscribe(res =>{
      this.compras = res
      this.miscompras = this.compras.filter(products =>{
        return products.idUser == this.userId
      })
    })
    
    this.carritoService.getPedido().subscribe((pedidoRecibido)=>{
      this.pedido = [...pedidoRecibido];
      
      this.pedido.forEach((vino)=>{
        this.precioTotal = this.precioTotal + vino.precioTotal
      })
    }) 
    
    
  }
  verDetalles(){
    this.router.navigate(['/detalles'])
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
    
  }
   comprarEj10(){
    let pedidoAux : Vino[] = []
    this.miscompras.forEach(micompra =>{
      micompra.pedido.forEach(product=>{
        this.pedido.forEach(prodCart =>{
          if(product.nombre === prodCart.nombre){
            return
          }
        })
        pedidoAux.push(product)
      })
    })

    this.compra = {
      _id:'',
      pedido: pedidoAux,
      idUser:this.userId
    }
    this.pedirService.postPedido(this.compra).subscribe()
    alert('Gracias por su compra!')
   }
  // comprarEjercicio28(){
  //   let pedidoAux : Vino[]
  //   pedidoAux = this.pedido.filter(vino =>{
  //     return vino.cantidad % 2 == 0
  //   })
  //   console.log(pedidoAux)
  //   this.compra = {
  //     _id:'',
  //     pedido: pedidoAux,
  //     idUser:this.userId
  //   }
  //   this.pedirService.postPedido(this.compra).subscribe()
  //   alert('Gracias por su compra!')
  // }
  comprarEjercicio29(){
    
  }
}
