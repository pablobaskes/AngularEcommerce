import { Component, OnInit, SimpleChanges } from "@angular/core";
import { UsuarioServiceService } from "../../services/usuario-service.service";
import { NgForm } from "@angular/forms";
import { Usuario } from "../../models/usuario";

@Component({
  selector: "app-usuario",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"],
  providers: [UsuarioServiceService],
})
export class usuarioComponent implements OnInit {

  constructor(public UsuarioServiceService: UsuarioServiceService) {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log()
    
  }
  ngOnInit() {
    this.getusuarios();
  }

  addusuario(form: NgForm) {
    if (form.value._id) {
      this.UsuarioServiceService.putUsuario(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getusuarios();
      });
    } else {
      if(!form.value.nombre && !form.value.pass && !form.value.dir && !form.value.tlf && !form.value.mail){
        alert('Todos los campos están vacios')
        
      }else{
        this.UsuarioServiceService.postUsuario(form.value).subscribe((res) => {
        this.getusuarios();
        this.resetForm(form);
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

  editusuario(usuario: Usuario) {
    this.UsuarioServiceService.selectedUsuario = usuario;
  }

  deleteusuario(_id: string, form: NgForm) {
    if (confirm("Are you sure you want to delete it?")) {
      this.UsuarioServiceService.deleteUsuario(_id).subscribe((res) => {
        this.getusuarios();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.UsuarioServiceService.selectedUsuario = new Usuario();
    }
  }
}
