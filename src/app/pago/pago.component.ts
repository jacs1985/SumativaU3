import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent {
  
  formularioEnvio = new FormGroup({
    email: new FormControl(''),
    pais: new FormControl(''),
    codigoPostal: new FormControl(''),
    direccion: new FormControl(''),
    numero:new FormControl(''),
    descDireccion:new FormControl(''),
    ciudad: new FormControl(''),
    region: new FormControl(''),
    referenciaDireccion: new FormControl(''),
    telefonoContacto: new FormControl(''),
    quienRecibe: new FormControl(''),
  });
  alertEmail!:string;
  alertDireccion!:string;
  alertNumero!:string;
  alertPais!:string;
  alertRegion!:string;
  alertCiudad!:string;
  alertTelefonoContacto!:string;
  alertQuienRecibe!:string;

  
  comprobacion = null;

  formularioVenta= new FormGroup({
    nombres: new FormControl(''),
    apellidos: new FormControl(''),
    numeroTarjeta: new FormControl(''),
    mesExpira: new FormControl(''),
    añoExpira: new FormControl(''),
    codigoSeguridad: new FormControl(''),
    tipoTarjeta: new FormControl(''),
  });

  datosFacturacion = true;
  direccionFacturacion = false;
  comunas = [];
  carritoResumen:any;
  alertNombres!:string;
  alertApellidos!:string;
  alertTipoTarjeta!:string;
  alertNumeroTarjeta!:string;
  alertCodigoSeguridad!:string;
  alertMesExpira!:string;
  alertAnoExpira!:string;


  constructor(public iziToast: Ng2IzitoastService, 
    private router:Router){ 
  }

  //  Total 346 comunas y 16 regiones
  regionesComunas =  [
    {
      region: "Arica y Parinacota",
      comunas: ["Arica", "Camarones", "Putre", "General Lagos"]
    },
    {
        region: "Tarapacá",
        comunas: ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
    },
    {
        region: "Antofagasta",
        comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
    },
    {
        region: "Atacama",
        comunas: ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
    },
    {
        region: "Coquimbo",
        comunas: ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
    },
    {
        region: "Valparaíso",
        comunas: ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
    },
    {
        region: "Región Metropolitana de Santiago",
        comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
    },
    {
        region: "Región del Libertador Gral. Bernardo O’Higgins",
        comunas: ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
    },
    {
        region: "Región del Maule",
        comunas: ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
    },
    {
        region: "Región de Ñuble",
        comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
    },
    {
        region: "Región del Biobío",
        comunas: ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
    },
    {
        region: "Región de la Araucanía",
        comunas: ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
    },
    {
        region: "Región de Los Ríos",
        comunas: ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
    },
    {
        region: "Región de Los Lagos",
        comunas: ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
    },
    {
        region: "Región Aisén del Gral. Carlos Ibáñez del Campo",
        comunas: ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
    },
    {
        region: "Región de Magallanes y de la Antártica Chilena",
        comunas: ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
    }
]
  

  selectRegion(newRegionComuna){
    let region = this.regionesComunas.filter(region => region.region == newRegionComuna);
    this.comunas = region[0].comunas;
  }
  

  confirmarDatosFacturacion(){
    this.datosFacturacion = false;
    this.direccionFacturacion = true;
  }

  validacionDirecTarjeta(){
    this.comprobacion = true;
    if(this.formularioVenta.value.nombres == ""){
      this.comprobacion = false;
      this.alertNombres = "Debe ingresar sus nombres";
    }
    if(this.formularioVenta.value.apellidos == ""){
      this.comprobacion = false;
      this.alertApellidos = "Debe ingresar sus apellidos";
    }
    if(this.formularioVenta.value.tipoTarjeta == ""){
      this.comprobacion = false;
      this.alertTipoTarjeta = "Debe ingresar un tipo de tarjeta";
    }
    if(this.formularioVenta.value.numeroTarjeta == ""){
      this.comprobacion = false;
      this.alertNumeroTarjeta = "Debe ingresar un numero de tarjeta";
    }
    if(this.formularioVenta.value.codigoSeguridad == ""){
      this.comprobacion = false;
      this.alertCodigoSeguridad = "Ingrese codigo seguridad";
    }
    if(this.formularioVenta.value.mesExpira == ""){
      this.comprobacion = false;
      this.alertMesExpira = "Ingrese mes";
    }
    if(this.formularioVenta.value.añoExpira == ""){
      this.comprobacion = false;
      this.alertAnoExpira = "Ingrese año";
    }
    if(this.formularioEnvio.value.direccion == ""){
      this.comprobacion = false;
      this.alertDireccion = "Debe ingresar una dirección";
    }
    if(this.formularioEnvio.value.numero == ""){
      this.comprobacion = false;
      this.alertNumero = "Debe ingresar numero de dirección";
    }
    if(this.formularioEnvio.value.pais == ""){
      this.comprobacion = false;
      this.alertPais = "Debe ingresar un pais";
    }
    if(this.formularioEnvio.value.ciudad == ""){
      this.comprobacion = false;
      this.alertCiudad = "Seleccione una ciudad";
    }
    if(this.formularioEnvio.value.region == ""){
      this.comprobacion = false;
      this.alertRegion = "Seleccione una región";
    }
    if(this.formularioEnvio.value.telefonoContacto == ""){
      this.comprobacion = false;
      this.alertTelefonoContacto = "Ingrese un telefono para coordinar envio";
    }
    if(this.formularioEnvio.value.quienRecibe == ""){
      this.comprobacion = false;
      this.alertQuienRecibe = "Ingrese persona quien recibe el envio";
    }
    if(this.formularioEnvio.value.email == ""){
      this.comprobacion = false;
      this.alertEmail = "Ingrese email";
    }
    

  }

}
