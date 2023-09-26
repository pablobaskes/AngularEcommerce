import { Component, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../models/usuario';
import { UsuarioServiceService } from "../services/usuario-service.service";
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-main-regis',
  templateUrl: './main-regis.component.html',
  styleUrls: ['./main-regis.component.css'],
  providers: [UsuarioServiceService],
})
export class MainRegisComponent implements OnInit {
  nombre : string
  pass : string
 
  constructor(
    public UsuarioServiceService:UsuarioServiceService,
    private router : Router) { 
      this.nombre = ''
      this.pass = ''
    }

  ngOnInit(): void {
    
  }

 
  addusuario(form: NgForm) {
    if (form.value._id) {
      this.UsuarioServiceService.putUsuario(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getusuarios();
      });
    } else {
      if(!form.value.nombre && !form.value.pass ){
        alert('Todos los campos están vacios')
        
      }else{
        this.UsuarioServiceService.postUsuario(form.value).subscribe((res) => {
        this.getusuarios();
        this.resetForm(form);
        this.router.navigate(['/login'])
        });
      }
      
      console.log(form.value)
    }
  }
  getusuarios() {
    console.log(this.UsuarioServiceService.getUsuarios())
    this.UsuarioServiceService.getUsuarios().subscribe((res) => {
      this.UsuarioServiceService.usuarios = res;
    });
    console.log(typeof(this.UsuarioServiceService.usuarios))
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.UsuarioServiceService.selectedUsuario = new Usuario();
    }
  }
}
