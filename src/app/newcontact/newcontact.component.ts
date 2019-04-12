import { Component, OnInit } from '@angular/core';
import { contact } from '../model/contact';
import { ServicesService } from '../services.service';
 

@Component({
  selector: 'app-newcontact',
  templateUrl: './newcontact.component.html',
  styleUrls: ['./newcontact.component.css']
})
export class NewcontactComponent implements OnInit {
contact:contact=new contact;
  constructor(public contactser: ServicesService) { }

  ngOnInit() {
  }
  savecontact(){
    this.contactser.addcontact(this.contact).subscribe(res=>{
      console.log(res);
    })
  }
}   
    