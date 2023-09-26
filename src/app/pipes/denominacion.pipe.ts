import { Pipe, PipeTransform } from '@angular/core';
import { Vino } from '../models/vino';

@Pipe({
  name: 'denominacion'
})
export class DenominacionPipe implements PipeTransform {

  transform(vinos:Vino[], region:string): Vino[] {
    if(!region){
      return vinos
    }else{
      return vinos.filter(vino=>vino.denominacion.toLocaleLowerCase()==region.toLocaleLowerCase());
    }  
  }

}
