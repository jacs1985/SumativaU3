import { Component, OnInit } from '@angular/core';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent  {


  productos = [];
  mostrarFormulario = false;
  total: number =0;
  subtotal: number = 0;
  iva: number;

  constructor(public iziToast: Ng2IzitoastService) { 
    
  }


  receptor($event: any) {  
    this.productos = $event; 

    for(let i=0;i<this.productos.length;i++){
      console.log("prod c :"+this.productos[i].cantidad);
      console.log("prod p :"+this.productos[i].precio);


      this.subtotal= this.subtotal+this.productos[i].cantidad*this.productos[i].precio;
    }
    this.iva= this.subtotal*0.19;
    this.total= this.subtotal+this.iva;
    
    console.log("iva "+this.iva);
    console.log("t "+this.total);
    
    this.mostrarFormulario = false;
    this.iziToast.success({ 
      title: "Producto Agregado",
      position:"topCenter",
      
    });
  } 

  nuevoItem(){
    this.mostrarFormulario = true;
  }
  cancelar(){
    this.mostrarFormulario = false;
  }

  /*producto: any = {
    codigo:'',
    nombre:'',
    precio:''
  }
  
  productos = [
    {codigo:'1001',nombre:'manzana',precio:'1000'},
    {codigo:'1002',nombre:'naranja',precio:'900'},
    {codigo:'1003',nombre:'piña',precio:'200'}
  ];
  
  verificarProductos(){
    return this.productos.length>0;
  }
  
  agregar(){
    for(let i=0;i< this.productos.length;i++){
      if(this.productos[i].codigo == this.producto.codigo){
        alert("el producto no se ha ingresado por que ya existe");
        return;
      }
    }
    // puede ser asi tambien this.productos.push(this.producto);
    this.productos.push({codigo:this.producto.codigo,
                        nombre:this.producto.nombre,
                        precio:this.producto.precio
    });
    this.producto.codigo='';
    this.producto.nombre='';
    this.producto.precio='';
  }
  
  seleccionar(producto:any){
    this.producto.codigo = producto.codigo;
    this.producto.nombre = producto.nombre;
    this.producto.precio = producto.precio;
  }
  
  eliminar(producto:any){
    for(let i=0;i< this.productos.length;i++){
      if(this.productos[i].codigo == producto.codigo){
        this.productos.slice(i,1);
        alert("el producto fue eliminado");
  
        return;
      }
    }
    alert("el producto no se encontro");
  }
  
  modificar(){
    for(let i=0;i< this.productos.length;i++){
      if(this.productos[i].codigo == this.producto.codigo){
        this.productos[i].nombre = this.producto.nombre;
        this.productos[i].precio = this.producto.precio;
        return;
      }
    }
    alert("el codigo no existe");
  }*/

}
