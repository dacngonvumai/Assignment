import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router';
import { ServerService } from '../server/server.service';
@Component({
  selector: 'app-multiplechoice',
  templateUrl: './multiplechoice.component.html',
  styleUrls: ['./multiplechoice.component.css']
})
export class MultiplechoiceComponent implements OnInit {

  quizs :any = [];
  Id: any;
  
  constructor(private http:HttpClient , private route:ActivatedRoute , private  listQuestion: ServerService ,private route2:Router) { }
  
  List:any =[];

  ngOnInit() {
    this.route.paramMap.subscribe(para =>{
      this.Id = para.get('cid');
      this.listQuestion.getQuizs(this.Id).subscribe(data =>{
        this.quizs = data;
        for (let i = 0; i < this.quizs.length; i++) {
          this.List[i] = { idcauhoi: this.quizs[i].Id , idcautraloidung: this.quizs[i].AnswerId, idcautraloi:null }
        }
      })
    })
    console.log(this.List)
  }

  check(idcauhoitruyenvao,idcautraloitruyenvao){
    for (let i = 0 ; i < this.List.length ; i++){
      if(this.List[i].idcauhoi == idcauhoitruyenvao){
        this.List[i].idcautraloi = idcautraloitruyenvao;
      }
    }
    }
  
  socaudalam=0;
  socaudung=0;
  diem:any;
  chamdiem(){
    for(let i=0; i<this.List.length;i++){
      if(this.List[i].idcautraloi == this.List[i].idcautraloidung){
        this.socaudung += 1;
      }
      if(this.List[i].idcautraloi != null){
        this.socaudalam +=1;
      }
    }
    console.log(this.socaudalam);
    console.log(this.socaudung);
    this.diem = ((this.socaudung/this.List.length)*10).toFixed(2);
    console.log(this.diem);
  }  
  
   
  
  
  
}
