import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { Ng2IziToastModule } from 'ng2-izitoast';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { PagoComponent } from './pago/pago.component';
import { RegistroComponent } from './registro/registro.component';

import { AppRoutingModule } from './app-routing.module';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormularioProductosComponent } from './registro-productos/formulario-productos/formulario-productos.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    LoginComponent,
    FooterComponent,
    PagoComponent,
    RegistroComponent,
    RegistroProductosComponent,
    NavbarComponent,
    FormularioProductosComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Ng2IziToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
