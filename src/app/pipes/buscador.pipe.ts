import { Pipe, PipeTransform } from '@angular/core';
import { Vino } from '../models/vino';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(vinos:Vino[], cad:string): Vino[] {
    if(!cad) {return vinos}
    let filteredVinos = vinos.filter(vino=>vino.nombre.toLocaleLowerCase().includes(cad.toLocaleLowerCase()))
    return filteredVinos;
  }

}
