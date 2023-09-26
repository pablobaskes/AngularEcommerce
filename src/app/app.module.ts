import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Componentes
import { AppComponent } from './app.component';
import { VinoComponent } from './components/vino/vino.component';
import { Route, Routes, RouterModule } from '@angular/router';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { MainVinosComponent } from './main-vinos/main-vinos.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { usuarioComponent } from "./components/usuarios/usuarios.component";
import { Usuario } from './models/usuario';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { LatizqComponent } from './components/latizq/latizq.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LatderComponent } from './components/latder/latder.component';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { MainRegisComponent } from './main-regis/main-regis.component';
import { MainLoginComponent } from './main-login/main-login.component';
import { CategoriasPipe } from './pipes/categorias.pipe';
import { CarritoDetailsComponent } from './components/carrito-details/carrito-details.component';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { DenominacionPipe } from './pipes/denominacion.pipe';
import { MisComprasComponent } from './mis-compras/mis-compras.component';
import { MiscomprasPipe } from './pipes/miscompras.pipe';
import { Ejercicio5Component } from './componentesExamen/ejercicio5/ejercicio5.component';
import { Ejercicio6PComponent } from './componentesExamen/ejercicio6-p/ejercicio6-p.component';
import { Ejercicio6HComponent } from './componentesExamen/ejercicio6-h/ejercicio6-h.component';
import { Ejercicio7Component } from './componentesExamen/ejercicio7/ejercicio7.component';
import { Ejercicio8PComponent } from './componentesExamen/ejercicio8-p/ejercicio8-p.component';
import { Ejercicio8HComponent } from './componentesExamen/ejercicio8-h/ejercicio8-h.component';
import { Ejercicio9PComponent } from './componentesExamen/ejercicio9-p/ejercicio9-p.component';
import { Ejercicio9HComponent } from './componentesExamen/ejercicio9-h/ejercicio9-h.component';
import { Ejercicio13Component } from './componentesExamen/ejercicio13/ejercicio13.component';
import { Ejercicio14PComponent } from './componentesExamen/ejercicio14-p/ejercicio14-p.component';
import { Ejercicio14HComponent } from './componentesExamen/ejercicio14-h/ejercicio14-h.component';
import { Ejercicio16PComponent } from './componentesExamen/ejercicio16-p/ejercicio16-p.component';
import { Ejercicio16HComponent } from './componentesExamen/ejercicio16-h/ejercicio16-h.component';
import { Ejercicip19PComponent } from './componentesExamen/ejercicip19-p/ejercicip19-p.component';
import { Ejercicio19HComponent } from './componentesExamen/ejercicio19-h/ejercicio19-h.component';
import { Ejercicio22HComponent } from './componentesExamen/ejercicio22-h/ejercicio22-h.component';
import { Ejercicio12Component } from './componentesExamen/ejercicio12/ejercicio12.component';
import { Ejercicio3Component } from './componentesExamen/ejercicio3/ejercicio3.component';
import { Ejercicio4PComponent } from './componentesExamen/ejercicio4-p/ejercicio4-p.component';
import { Ejercicio4HComponent } from './componentesExamen/ejercicio4-h/ejercicio4-h.component';
import { Ejercicio11Component } from './componentesExamen/ejercicio11/ejercicio11.component';
import { Ejercicio15Component } from './componentesExamen/ejercicio15/ejercicio15.component';
import { Ej4PComponent } from './repaso/ej4-p/ej4-p.component';
import { Ej4HComponent } from './repaso/ej4-h/ej4-h.component';
import { Ej5Component } from './repaso/ej5/ej5.component';
import { Ej6PComponent } from './repaso/ej6-p/ej6-p.component';
import { Ej6HComponent } from './repaso/ej6-h/ej6-h.component';


const appRoutes:Routes=[
  {path: '', component: MainLoginComponent },
  {path:'admin',component:MainAdminComponent },
  {path:'regis',component:MainRegisComponent },
  {path:'vinos',component:MainVinosComponent },
  {path:'detalles',component:CarritoDetailsComponent },
  {path:'compras', component:MisComprasComponent},
  {path:'login', component:MainLoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    VinoComponent,
    MainAdminComponent,
    MainVinosComponent,
    CarritoComponent,
    usuarioComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LatizqComponent,
    CategoriesComponent,
    LatderComponent,
    MainContainerComponent,
    MainRegisComponent,
    MainLoginComponent,
    CategoriasPipe,
    CarritoDetailsComponent,
    BuscadorPipe,
    DenominacionPipe,
    MisComprasComponent,
    MiscomprasPipe,
    Ejercicio5Component,
    Ejercicio6PComponent,
    Ejercicio6HComponent,
    Ejercicio7Component,
    Ejercicio8PComponent,
    Ejercicio8HComponent,
    Ejercicio9PComponent,
    Ejercicio9HComponent,
    Ejercicio13Component,
    Ejercicio14PComponent,
    Ejercicio14HComponent,
    Ejercicio16PComponent,
    Ejercicio16HComponent,
    Ejercicip19PComponent,
    Ejercicio19HComponent,
    Ejercicio22HComponent,
    Ejercicio12Component,
    Ejercicio3Component,
    Ejercicio4PComponent,
    Ejercicio4HComponent,
    Ejercicio11Component,
    Ejercicio15Component,
    Ej4PComponent,
    Ej4HComponent,
    Ej5Component,
    Ej6PComponent,
    Ej6HComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
