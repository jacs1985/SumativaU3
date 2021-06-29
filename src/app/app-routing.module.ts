import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagoComponent } from './pago/pago.component';
import { ProductosComponent } from './productos/productos.component';
import { FormularioProductosComponent } from './registro-productos/formulario-productos/formulario-productos.component';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
  path:'',
  component: LoginComponent
  },
  {
    path:'productos',
    component: ProductosComponent
  },
  {
    path:'pago',
    component: PagoComponent
  },
  {
    path:'registro',
    component: RegistroComponent
  },
  {
    path:'navbar',
    component: NavbarComponent
  },
  {
    path:'registroProductos',
    component: RegistroProductosComponent
  },
  {
    path:'formularioProductos',
    component: FormularioProductosComponent
  }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
