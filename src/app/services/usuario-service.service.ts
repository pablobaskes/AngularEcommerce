import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {
  selectedUsuario: Usuario;
  usuarios: Usuario[];
  
  readonly URL_API = "http://localhost:4000/api/usuarios";

  constructor(private http: HttpClient) { 
    this.selectedUsuario = new Usuario();
   
  }
  
  getUsuario(nombre: string, pass: string) {
    return this.http.get(`${this.URL_API}/${nombre}/${pass}`);
  }

  postUsuario(Usuario: Usuario) {
    return this.http.post(this.URL_API, Usuario);
    
  }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.URL_API);
  }

  putUsuario(Usuario: Usuario) {
    return this.http.put(this.URL_API + `/${Usuario._id}`, Usuario);
  }

  deleteUsuario(_id: string) {
    
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
