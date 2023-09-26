import { Component, OnInit } from '@angular/core';
import { Vino } from 'src/app/models/vino';
import { VinoService } from "../../services/vino.service";
import { Filter, FilterService } from "../../services/filter.service";
import { CategoriasPipe } from "../../pipes/categorias.pipe";
import { CarritoService } from "../../services/carrito.service";
import { BuscadorService } from "../../services/buscador.service";
import { BuscadorPipe } from "../../pipes/buscador.pipe";
import { DenominacionPipe } from "../../pipes/denominacion.pipe";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  vinos : Vino[]
  filtro : Filter
  selectedVino : Vino
  pedido : Vino[]
  cad : string
  denominacion : string
  cont : number
  vinosEj7 : Vino[]
  constructor(
    public vinoService: VinoService,
    private filterService : FilterService,
    private carritoService : CarritoService,
    private buscadorService : BuscadorService
  ) {
    this.pedido = []
    this.cont = 0
    this.vinosEj7 = []
  }
      
  ngOnInit(): void {
    this.filterService.currentFilter.subscribe((Filter)=>{
     this.filtro = Filter
     
    })
    this.vinoService.getVinos().subscribe(vinos=>{
      this.vinos = vinos
    })
    this.buscadorService.getCad().subscribe(res=>{
      this.cad = res
      
    })
    this.buscadorService.getDenominacion().subscribe(res=>this.denominacion=res)

  }
  addWine(vino:Vino){
    this.selectedVino = vino 
    this.selectedVino.precioTotal = vino.precio
    this.vinosEj7.push(vino)
    let vinoEnCarrito = this.pedido.find(v=>
      v._id===vino._id
    )
    if(vinoEnCarrito){
      vinoEnCarrito.cantidad = vinoEnCarrito.cantidad + 1
      
      vinoEnCarrito.precioTotal = vinoEnCarrito.precio * vinoEnCarrito.cantidad
    }else{
      this.selectedVino.cantidad = 1
      this.pedido.push(this.selectedVino)
    }
    this.carritoService.updatePedido(this.pedido)
  }

 
}
