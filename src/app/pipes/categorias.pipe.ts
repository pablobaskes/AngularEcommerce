import { Pipe, PipeTransform } from '@angular/core';
import { Vino } from '../models/vino';
import { VinoService } from "../services/vino.service";
import { Filter, FilterService } from "../services/filter.service";
import { filter } from 'rxjs';

@Pipe({
  name: 'categorias'
})
export class CategoriasPipe implements PipeTransform {
  
 
  transform(vinos:Vino[], filtro:Filter): Vino[] {
    let mensaje : string
    if (!vinos) return [];
    if (!filtro) return vinos;
    if (!filtro.price && !filtro.color && !filtro.type && !filtro.region) return vinos;

    let filteredVinos = vinos;   
      // si el filtro tiene precio, filtra según el precio
      if (filtro.price) {
        if(filtro.price == '0-5'){
        filteredVinos = filteredVinos.filter(vino => vino.precio <= 5);
      }else if(filtro.price == '5-10'){
        filteredVinos = filteredVinos.filter(vino=> vino.precio > 5 && vino.precio<=10)
      }else if(filtro.price=='10-20'){
        filteredVinos = filteredVinos.filter(vino=> vino.precio > 10 && vino.precio<=20)
      }else{
        filteredVinos = filteredVinos.filter(vino => vino.precio > 20)
      }
        
      }
  
      // si el filtro tiene color, filtra según el color
      if (filtro.color) {
        filteredVinos = filteredVinos.filter(vino => vino.color.toLocaleLowerCase() === filtro.color.toLocaleLowerCase());
        
      }
  
      // si el filtro tiene tipo, filtra según el tipo
      if (filtro.type) {
        filteredVinos = filteredVinos.filter(vino => vino.tipo.toLocaleLowerCase() === filtro.type.toLocaleLowerCase());
      }
  
      // si el filtro tiene region, filtra según la denominacion
      if (filtro.region) {
        filteredVinos = filteredVinos.filter(vino => vino.denominacion.toLocaleLowerCase() === filtro.region.toLocaleLowerCase());
      }
    
    // si el filtro no tiene valores, devuelve el array de vinos entero
    if(!filteredVinos){
      mensaje = 'No hay ningun vino que corresponda a esas categorias'
    }
    return filteredVinos;
  }
}
