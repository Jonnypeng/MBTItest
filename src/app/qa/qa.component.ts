import { Component, OnInit ,Input} from '@angular/core';
import { qas , result } from '../question';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})


export class QaComponent implements OnInit {
  id:number = 0;
  qaes = qas;
  btnText:string;
  type:string[] = ["","","",""];

  constructor() { 
  }

  ngOnInit() {
      this.btnText = "下一题";
  }

  onChange(value,tag1,tag2){
    if(value < 0){
        this.qaes[this.id][tag1].value = 0;
    }else if(value > 5){
        this.qaes[this.id][tag1].value = 5;
    }else{
        this.qaes[this.id][tag2].value = 5 - this.qaes[this.id][tag1].value;
    }

  }


  onBtntext(){
    if(this.id > this.qaes.length - 2){
      console.log(this.id);
      this.btnText = "计算结果"; 
      this.onTotalResult();
      return false;
    }else if(this.qaes[this.id].A.value === 0 && this.qaes[this.id].B.value === 0 ){
        alert("您尚未选择答案");
    }else{
      this.id+=1;
    }
  }

  onTotalResult(){

      function total(_tag:string){
         if(this.tag = _tag){
             result[_tag]+=this.value;
         }
      }

      this.qaes.forEach(function (v){
          if(v.A.tag==="E"){
            total.call(v.A,"E");
          }else if(v.A.tag==="S"){
            total.call(v.A,"S");
          }else if(v.A.tag==="T"){
            total.call(v.A,"T");
          }else if(v.A.tag==="P"){
            total.call(v.A,"P");
          }else if(v.B.tag==="I"){
            total.call(v.B,"I");
          }else if(v.B.tag==="N"){
            total.call(v.B,"N");
          }else if(v.B.tag==="F"){
            total.call(v.B,"F");
          }else if(v.B.tag==="J"){
            total.call(v.B,"J");
          }else{
              return false;
          }
      });

      this.type[0] = result.E > result.I ? "E" : "I";
      this.type[1] = result.N > result.S ? "N" : "S";
      this.type[2] = result.T > result.F ? "T" : "F";
      this.type[3] = result.P > result.J ? "P" : "J";

      console.log(this.type);

  }

}
