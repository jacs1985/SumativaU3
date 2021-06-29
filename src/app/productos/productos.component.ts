import { Component } from '@angular/core';
//import {Ng2IzitoastService} from "ng2-izitoast";
import { FormControl } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  {
 
  constructor(private router: Router){
  }


totalDinero = 0;
totalCarrito =0;
hola = ['hola','como'];


clave = new FormControl('');
cantidad = new FormControl('');

// productosCarrito : any =[{
//   codigo: 0,
//   cantidad: 0
// }];


  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad = [
    {
      codigo: 0,
      cant: 0,
    }
  ];

  productos: any[] = [];



producto : any = [];
productosActual1 = [
  {
    codigo: 1001, 
    nombre: "Acer GeoForce GTX 51x 16 ram", 
    precio: 350000,
    descripcion: "Posee USB3 gen 1, 1xHDMI, 1xDisplayport, usb C ",
    img: "../../assets/tarjetas/1050tigiga.png",
    tags:"nvidia, gigabyte, gtx"
  },
  {
    codigo: 1002, 
    nombre: "Asus GeoForce GTX 51x 16 ram", 
    precio: 550000,
    descripcion: "Posee 2xUSB3.1 gen 2, Displayport",
    img: "../../assets/tarjetas/1660smsi.png",
    tags:"nvidia, gigabyte usb3"
  },
  {
    codigo: 1003, 
    nombre: "dell nvida GTX 51x 16 ram", 
    precio: 50000,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/6700msi.png',
    tags:"nvidia, gtx, gen 2"
  },
  {
    codigo: 1004, 
    nombre: "dell nvida GTX 51x 16 ram", 
    precio: 457000,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/6700msi.png',
    tags:"nvidia, gtx"
  },
  {
    codigo: 1005, 
    nombre: "acer  GTX 51x 16 ram", 
    precio: 457700,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/6700msi.png',
    tags:"nvidia, gtx"
  },
  {
    codigo: 1006, 
    nombre: "dell nvida GTX 51x 16 ram", 
    precio: 650800,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/3060msi.png',
    tags:"nvidia, gtx"
  },
  {
    codigo: 1007, 
    nombre: "asus nvida GTX 51x 16 ram", 
    precio: 850000,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/6700msi.png',
    tags:"nvidia, gtx"
  },
  {
    codigo: 1008, 
    nombre: "dell nvida GTX 51x 16 ram", 
    precio: 950000,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/6900asus.png',
    tags:"nvidia"
  },
  {
    codigo: 1009, 
    nombre: "dell nvida GTX 51x 16 ram", 
    precio: 450000,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/gabcm.png',
    tags:"gabinete"
  },
  {
    codigo: 1010, 
    nombre: "dell nvida GTX 51x 16 ram", 
    precio: 751000,
    descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
    img: '../../assets/tarjetas/gabthermal.png',
    tags:"gabinete"
  }

]

  productosActual = [
    {
      codigo: 1001, 
      nombre: "Acer GeoForce GTX 51x 16 ram", 
      precio: 350000,
      descripcion: "Posee USB3 gen 1, 1xHDMI, 1xDisplayport, usb C ",
      img: "../../assets/tarjetas/1050tigiga.png",
      tags:"nvidia, gigabyte, gtx"
    },
    {
      codigo: 1002, 
      nombre: "Asus GeoForce GTX 51x 16 ram", 
      precio: 550000,
      descripcion: "Posee 2xUSB3.1 gen 2, Displayport",
      img: "../../assets/tarjetas/1660smsi.png",
      tags:"nvidia, gigabyte usb3"
    },
    {
      codigo: 1003, 
      nombre: "dell nvida GTX 51x 16 ram", 
      precio: 50000,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/6700msi.png',
      tags:"nvidia, gtx, gen 2"
    },
    {
      codigo: 1004, 
      nombre: "dell nvida GTX 51x 16 ram", 
      precio: 457000,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/6700msi.png',
      tags:"nvidia, gtx"
    },
    {
      codigo: 1005, 
      nombre: "acer  GTX 51x 16 ram", 
      precio: 457700,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/6700msi.png',
      tags:"nvidia, gtx"
    },
    {
      codigo: 1006, 
      nombre: "dell nvida GTX 51x 16 ram", 
      precio: 650800,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/3060msi.png',
      tags:"nvidia, gtx"
    },
    {
      codigo: 1007, 
      nombre: "asus nvida GTX 51x 16 ram", 
      precio: 850000,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/6700msi.png',
      tags:"nvidia, gtx"
    },
    {
      codigo: 1008, 
      nombre: "dell nvida GTX 51x 16 ram", 
      precio: 950000,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/6900asus.png',
      tags:"nvidia"
    },
    {
      codigo: 1009, 
      nombre: "dell nvida GTX 51x 16 ram", 
      precio: 450000,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/gabcm.png',
      tags:"gabinete"
    },
    {
      codigo: 1010, 
      nombre: "dell nvida GTX 51x 16 ram", 
      precio: 751000,
      descripcion: "Posee usb3.1 gen 2, 1xDisplayport, usb C 1xDVI'",
      img: '../../assets/tarjetas/gabthermal.png',
      tags:"gabinete"
    }

  ];

  productosCarritoActual: any;

  agregarProducto(i: any){
    if(this.productosCarrito.includes(this.productosActual[i])){
      console.log("Ya tiene el producto")
      for(let j = 0;j<this.productosCantidad.length;j++){
        if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
          this.productosCantidad[j].cant+=1;
        }
      }
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero));
    }
    else{
      console.log("No tiene el producto");
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
      this.totalDinero+=this.productosActual[i].precio;
      localStorage.setItem("total",JSON.stringify(this.totalDinero))
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  actualizarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = this.cantidad.value;
        this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
      }
    }
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  busquedaClave(){
    let pos = [];
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
        pos.push(this.productosActual[i].codigo);
      }
      else{
        console.log('Encontrado');
      }
    }
    for(let j=0;j<pos.length;j++){
      for(let i=0;i<this.productosActual.length;i++){
        if(pos[j]==this.productosActual[i].codigo){
          this.productosActual.splice(i,1);
        }
      }
    }
    
  }

  quitarBusqueda(){
    this.productosActual = [];
    for(let i=0; i<this.productosActual1.length;i++){
      this.productosActual.push({codigo: this.productosActual1[i].codigo, nombre: this.productosActual1[i].nombre, precio: this.productosActual1[i].precio, 
        descripcion: this.productosActual1[i].descripcion, img: this.productosActual1[i].img, tags: this.productosActual1[i].tags});
    }
    this.productosActual = this.productosActual1;
  }
goProductos(){
  this.router.navigate(['productos']);
}

}
