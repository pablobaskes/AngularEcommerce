import { Component, OnInit, PipeTransform, SimpleChanges } from '@angular/core';
import { VinoService } from '../services/vino.service';
import { Vino } from "../models/vino";
import { Filter, FilterService } from "../services/filter.service";
import { filter } from 'rxjs';
import { CategoriasPipe } from "../pipes/categorias.pipe";
import { PedidoService } from "../services/pedido.service";
import { Router } from '@angular/router';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-main-vinos',
  templateUrl: './main-vinos.component.html',
  styleUrls: ['./main-vinos.component.css'],
  providers: [VinoService],
})
export class MainVinosComponent implements OnInit {
  username : string
  pass : string
  imgPaths:string[]
  vinos : Vino[]
  categories : Filter
  price : number
  userId : string
  pedidosUser : Pedido[]
  constructor(public vinoService:VinoService, 
    private filterService : FilterService, 
    private pedidoService : PedidoService,
    private router : Router) { 
    this.price = 0
    this.pedidosUser = []
  }
  // obtenerId(){
  //   let userId = localStorage.getItem('userId');
  //   if (userId) {
  //     this.userId = userId  
  //   } else {
  //     console.error("No se encuentra el item en el localstorage");
  //   } 
  // }

   ngOnInit(): void {
    // this.obtenerId()
    this.getVinos()
    // this.ejecicio9()
     this.filterService.currentFilter.subscribe((filter)=>{
      this.categories = filter
      this.price = parseInt(filter.price) 
   })

   
   }

  //  ejecicio9(){
  //   this.pedidoService.getPedido().subscribe(res=>{
  //    this.pedidosUser = res.filter(pedidos =>{
  //    return pedidos.idUser == this.userId
      
  //   })
  //   console.log(this.pedidosUser.length)
  //   if(this.pedidosUser.length>2){
  //       alert('Used no puede rrealizar mas compras')
  //       localStorage.clear()
  //       this.router.navigate(['/'])
  //     }
    
  //  })
  //  }
   
  
  
   getVinos() {
     console.log(this.vinoService.getVinos())
     this.vinoService.getVinos().subscribe((res) => {
       this.vinoService.vinos = res;
       this.vinos = this.vinoService.vinos
     });
   
   }

}
