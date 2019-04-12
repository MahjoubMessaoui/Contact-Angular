import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from  '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
 
import { HommeComponent } from './homme/homme.component';
import { ListcontactComponent } from './listcontact/listcontact.component';
import { ContactsComponent } from './contacts/contacts.component';
 
import { NewcontactComponent } from './newcontact/newcontact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidbarComponent,
    ContainerComponent,
    LoginComponent,
    HommeComponent,
    ListcontactComponent,
    ContactsComponent,
    
    NewcontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
