import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from "../../services/usuario-service.service";

@Component({
  selector: 'app-ejercicio8-p',
  templateUrl: './ejercicio8-p.component.html',
  styleUrls: ['./ejercicio8-p.component.css']
})
export class Ejercicio8PComponent implements OnInit {
  userId : string
  constructor(private userService : UsuarioServiceService) { 
    this.userId = ''
  }

  ngOnInit(): void {
    this.obtenerId()
    this.userService.getUsuarios().subscribe(res =>{
      res.forEach(user => {
        if(user._id == this.userId){

        }else{
          this.userService.deleteUsuario(user._id)
        }
        
      });
    })
  }
  obtenerId(){
    let userId = localStorage.getItem('userId');
    if (userId) {
      this.userId = userId  
    } else {
      console.error("No se encuentra el item en el localstorage");
    } 
  }
}
