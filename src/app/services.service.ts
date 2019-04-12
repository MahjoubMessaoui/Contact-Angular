import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { contact } from './model/contact';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpClient) { }


getcontact(){

 return this.http.get<any>("http://localhost:9005/contact/all");
}
 

addcontact(contact:contact){

  return this.http.post("http://localhost:9005/contact/add", contact);
}

}
