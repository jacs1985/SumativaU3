import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { Ng2IzitoastService } from 'ng2-izitoast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cUser = "user";
  cPassword = "user";

  alertUser!: string;
  constructor(private router: Router,public iziToast: Ng2IzitoastService) { }
  
  usersForm = new FormGroup({
    user : new FormControl(''),
    password : new FormControl('')
  })
  
  
  ngOnInit(): void {
  }

  validar(){
    let comprobacion = true;
    if(this.usersForm.value.user == ""){
      this.iziToast.warning({ 
        title: "El Usuario no se ha ingresado",
        position:"topCenter",
        transitionIn:'fadeInDown'
        
      });
      this.alertUser = "";
      comprobacion = false;
    }
    if(this.usersForm.value.password == ""){
      this.iziToast.warning({ 
        title: "La Contraseña no se ha ingresado",
        position:"topCenter",
        transitionIn:'fadeInDown'
      });
      this.alertUser = "";
      comprobacion = false;
    }    
    if(comprobacion && this.cPassword != this.usersForm.value.password && this.cUser == this.usersForm.value.user){
        this.alertUser = "Usuario ó contraseña erronea";
    }
    if(comprobacion && this.cPassword == this.usersForm.value.password && this.cUser != this.usersForm.value.user){
      this.alertUser = "Usuario ó contraseña erronea";
    }
    if(comprobacion && this.cPassword != this.usersForm.value.password && this.cUser != this.usersForm.value.user){
      this.alertUser = "Usuario y contraseña erroneas";
    }
    if(comprobacion && this.cPassword == this.usersForm.value.password && this.cUser == this.usersForm.value.user){
      this.router.navigate(['productos']);
    }
    


    // if(this.usersForm.value.user == this.cUser){
    //   this.alertUser = "";
    // }
    // else{
    //   this.alertUser = "Usuario o password incorrecto";
    // }
    // if(this.usersForm.value.password == this.cPassword){
    //   this.alertUser = "";
    // }
    // else{
    //   this.alertUser = "Usuario o password incorrecto";
    // }
    // if(this.alertUser == ""){
    //   this.router.navigate(['productos']);
    // }
  }
}
