import { Component, OnInit, SimpleChanges } from '@angular/core';
import { VinoService } from "../../services/vino.service";
import { NgForm } from "@angular/forms";
import { Vino } from "../../models/vino";
import { UsuarioServiceService } from "../../services/usuario-service.service";
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-vino',
  templateUrl: './vino.component.html',
  styleUrls: ['./vino.component.css'],
  providers: [VinoService],
})
export class VinoComponent implements OnInit {
  producto : Vino
  numClientes : number //vaina a enviar
  users : Usuario[]
  constructor(public vinoService:VinoService, private userService : UsuarioServiceService) { 
   this.numClientes = 0
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log()   
  }
  ngOnInit(): void {
    this.getVinos()
  }

  // ejercicio20(id:string){
  //   this.userService.getUsuarios().subscribe(res =>{
  //     this.users = res
  //     for(let i=0;i<this.users.length;i++){
  //       for(let j=0;j<this.vinoService.vinos.length;j++){

  //       }
  //     }
  //   })
  // }
  
  
  addVino(form: NgForm) {
    if (form.value._id) {
      this.vinoService.putVino(form.value).subscribe((res) => {
        this.resetForm(form);
        this.getVinos();
      });
    } else {
      if(!form.value.nombre && !form.value.cargo && !form.value.departamento && !form.value.salario){
        alert('Todos los campos están vacios')
        
      }else{
        this.vinoService.postVino(form.value).subscribe((res) => {
        this.getVinos();
        this.resetForm(form);
        });
      }
      
      console.log(form.value)
    }
  }

  getVinos() {
    console.log(this.vinoService.getVinos())
    this.vinoService.getVinos().subscribe((res) => {
      this.vinoService.vinos = res;
    });
    
  }

  editVino(vino: Vino) {
    this.producto = vino
    this.vinoService.selectedVino = vino;
  }

  deleteVino(_id: string, form: NgForm) {
    if (confirm("Este vino se eliminará de la base de datos. Estas seguro?")) {
      this.vinoService.deleteVino(_id).subscribe((res) => {
        this.getVinos();
        this.resetForm(form);
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.vinoService.selectedVino = new Vino();
    }
  }
 
}
