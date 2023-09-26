import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Vino } from "../models/vino";

@Injectable({
  providedIn: 'root'
})

export class CarritoService {
private pedido : Vino[]
private pedido$ : Subject<Vino[]>
// private currentPedido = this.pedido$.
  constructor() { 
    this.pedido = []
    this.pedido$ = new BehaviorSubject<Vino[]>([])
  }
  updatePedido(vVinos:Vino[]){
    this.pedido$.next(vVinos)
    console.log(vVinos)
  }
  getPedido():Observable<Vino[]>{
    return this.pedido$.asObservable()
  }
}
