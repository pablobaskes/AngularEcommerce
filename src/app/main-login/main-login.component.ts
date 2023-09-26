import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, Routes } from '@angular/router';
import { catchError, of, Subject, tap } from 'rxjs';
import { Usuario } from '../models/usuario';
import { UsuarioServiceService } from '../services/usuario-service.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.css'],
  providers: [UsuarioServiceService],
})
export class MainLoginComponent implements OnInit {
  nombre = '';
  pass = '';
  error = '';
  users: Usuario[];
  usuario: Usuario;

  constructor(
    public UsuarioService: UsuarioServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login3() {
    try {
      this.UsuarioService.getUsuarios().subscribe((res) => {
        this.users = res;
        let logedUser = this.users.find(
          (user) => user.nombre == this.nombre && user.pass == this.pass
        );
        if (!logedUser) {
          this.router.navigate(['/regis']);
        } else {
          this.usuario = logedUser;
          if (logedUser?._id == '63bd37195fcd6a6b716766b1') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/vinos']);
          }
        }
        localStorage.setItem('userId', this.usuario._id);
        sessionStorage.setItem('userId', this.usuario._id);
      });
    } catch (error) {
      this.router.navigate(['/regis']);
    }
  }
}
