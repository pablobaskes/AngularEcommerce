import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  private cad$ : BehaviorSubject<string>
  private deno$ : BehaviorSubject<string>
  constructor() { 
    this.cad$ = new BehaviorSubject<string>('')
    this.deno$ = new BehaviorSubject<string>('')
  }
  updateCad(cCad : string){
    this.cad$.next(cCad)
  }
  getCad():Observable<string>{
    return this.cad$.asObservable()
  }

  updateDeno(dDeno:string){
    this.deno$.next(dDeno)
  }
  getDenominacion():Observable<string>{
    return this.deno$.asObservable()
  }
}
