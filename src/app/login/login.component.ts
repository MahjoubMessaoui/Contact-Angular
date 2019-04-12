import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
private pswd;
private user;
 
 
  constructor(private router: Router) { }

  ngOnInit() {
  }
  logusers(){

    if (this.user == "messaoui" && this.pswd =="123456" ) {
      console.log('ok');
      this.router.navigate(['/homme']);
     
        
    }
    else{
      console.log ('non')
      swal("verifier votre user et pswd");
    } 
  }



}
