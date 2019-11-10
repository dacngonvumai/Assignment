import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
results:any;
verifiemail:null;
verificode :null;
password:null;
constructor(private http : HttpClient) {}
ngOnInit() {
  this.http.get("https://cuong-dev1-api.herokuapp.com/studentsTwo?fbclid=IwAR1uI2s1rT1a_OszCF8toe77vqa4jnSeLnYp-kXW_URZ-V052Acfh2MZbrs").subscribe(data =>{
    console.log(data);
    this.results = data;
  });
}
check(){
  this.results.forEach(element => {
    if( element.email == this.verifiemail && element.id == this.verificode) {
      alert(element.password)
    }
    else{
      alert("sai roi")
    }
  });
}
}
