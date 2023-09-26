import { Pipe, PipeTransform } from '@angular/core';
import { Pedido } from '../models/pedido';

@Pipe({
  name: 'miscompras'
})
export class MiscomprasPipe implements PipeTransform {

  transform(pedidos:Pedido[], idUser:string): Pedido[] {
    if(!idUser || !pedidos)return []
      
    let filtredPedidos = pedidos.filter(pedido=> pedido.idUser == idUser) 
    if(!filtredPedidos){
      return []
    }
    console.log(filtredPedidos)
    return filtredPedidos;
  }

}
