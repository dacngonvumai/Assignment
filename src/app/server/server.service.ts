import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServerService {

  url='/assets/db/Subjects.json';  
  
  constructor(private http :HttpClient) {

   }
   getSub():Observable<any>{
     return this.http.get<any>(this.url);
   }

   getQuizs(Id:string):Observable<any>{
     return this.http.get<any>(`assets/db/Quizs/`+Id+`.json`);
   }
}
