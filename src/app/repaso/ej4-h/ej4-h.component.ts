import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioServiceService } from "../../services/usuario-service.service";
@Component({
  selector: 'app-ej4-h',
  templateUrl: './ej4-h.component.html',
  styleUrls: ['./ej4-h.component.css']
})
export class Ej4HComponent implements OnInit {
  @Input() id_user : string
  @Output() itemEmitter : EventEmitter<string>
  users : Usuario[]
  pass : string
  constructor(private userSrv : UsuarioServiceService) { 
    this.itemEmitter = new EventEmitter()
  }

  ngOnInit(): void {
    this.buscarUserLoged()
  }
  buscarUserLoged(){
    this.userSrv.getUsuarios().subscribe(res =>{
      this.users = res
      
      let loged
      loged = this.users.find(user =>{
        return user._id == this.id_user
      })
      
      if(loged){
        this.pass = loged.pass
        console.log(this.pass)
      }
    })
  }
  enviarAlPadre(){
    this.itemEmitter.emit(this.pass)
  }
}
