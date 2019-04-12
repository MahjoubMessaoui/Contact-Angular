import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent implements OnInit {
datas=""
  constructor(public serve: ServicesService) { }

  ngOnInit() {

    this.serve.getcontact().subscribe(res=>{
      this.datas=res;
    })
  }

}
