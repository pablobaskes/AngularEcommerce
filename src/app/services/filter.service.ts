import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

//Interfaz para describir los filtros
export interface Filter {
  price: string;
  color: string;
  type: string;
  region: string;
}

//Indicamos que este servicio es inyectable
@Injectable({
  providedIn: 'root'
})
export class FilterService {
  //Creamos un nuevo comportamiento, el cual es un observable, con los valores iniciales de los filtros vacios
  private filter = new BehaviorSubject<Filter>({
    price: '',
    color: '',
    type: '',
    region: ''
  });
  //creamos una variable currentFilter que es un observable para poder acceder a los valores del comportamiento anterior
  currentFilter = this.filter.asObservable();

  constructor() { }

  //Función para actualizar los filtros
  updateFilter(filter: Filter) {
    this.filter.next(filter);
    console.log(filter.color)
  }
}
