import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Vino } from "../models/vino";

@Injectable({
  providedIn: 'root'
})
export class VinoService {
  selectedVino:Vino
  vinos:Vino[]
  readonly URL_API2 = "http://localhost:4000/api/vinos";

  constructor(private http: HttpClient) { 
    this.selectedVino=new Vino();   
  }
  
  postVino(vino: Vino) {
    return this.http.post(this.URL_API2, vino);
    
  }

  getVinos() {
    return this.http.get<Vino[]>(this.URL_API2);
  }

  putVino(vino: Vino) {
    return this.http.put(this.URL_API2 + `/${vino._id}`, vino);
  }

  deleteVino(_id: string) {
    return this.http.delete(this.URL_API2 + `/${_id}`);
  }
}
