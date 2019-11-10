import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TouchSequence } from 'selenium-webdriver';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  taikhoan:null;
  matkhau:null;
  results:any;
  
  constructor(private http : HttpClient , private router : Router) {}
  ngOnInit() {
    this.http.get("https://cuong-dev1-api.herokuapp.com/studentsTwo?fbclid=IwAR1uI2s1rT1a_OszCF8toe77vqa4jnSeLnYp-kXW_URZ-V052Acfh2MZbrs").subscribe(data =>{
      console.log(data);
      this.results = data;
    });
  }

  check(){
    let flag = false;
    this.results.forEach(element => {
      if( element.username == this.taikhoan && element.password == this.matkhau) {
        alert("Dang nhap thanh cong")
        this.router.navigate(["/tracnghiem"])
        flag = true;
      }
    });
    if (flag == false)
    {
      alert("Nhap lai tai khoan hoac mat khau")
    }
  }
 
}
