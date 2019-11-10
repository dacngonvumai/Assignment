import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; 
import { IntroduceComponent } from './introduce/introduce.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ChangeaccountComponent } from './changeaccount/changeaccount.component';
import { MultiplechoiceComponent } from './multiplechoice/multiplechoice.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    ChangepasswordComponent,
    ChangeaccountComponent,
    MultiplechoiceComponent,
    ForgetpasswordComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
      NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'dangnhap', component: SigninComponent },
      { path: 'dangky', component: SignupComponent },
      { path: 'doimatkhau', component: ChangepasswordComponent },
      { path: 'doitaikhoan', component: ChangeaccountComponent },
      { path: 'gioithieu', component: IntroduceComponent },
      { path: 'lienhe', component: ContactComponent },
      { path: 'quenmatkhau', component: ForgetpasswordComponent },
      { path: 'tracnghiem/:cid', component: MultiplechoiceComponent },
    ]),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
