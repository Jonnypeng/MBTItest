import { Component, OnInit ,Input} from '@angular/core';
import { Qas , result } from '../question';


// interface card{
//   value:number;
//   selected:boolean;
// }

class Card{
  value:number;
  selected:boolean;
  constructor(_value:number,_selected:boolean){
    this.value = _value;
    this.selected = _selected;
  }
}


@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})

export class QaComponent implements OnInit {
  id:number = 0;
  qaes:any[] = [];
  btnText:string;
  type:string[] = ["","","",""];
  typeUrl:string;
  gameEnd:boolean = false;
  // prevBtn:any = {
  //   "tag":"",
  //   "value":""
  // };

  prevBtn:any = {
    "A":{value:""},
    "B":{value:""}
  }

  cards:any = {
    "A":[],
    "B":[]
  };


  constructor() { 
    this.qaes[0] = new Qas("当你遇到新朋友时,你", {"text":"说话的说话时间与聆听的时间相若","value":0,"tag":"E"}, {"text":"聆听的时间会比说话的时间多","value":0,"tag":"I"});
    this.qaes[1] = new Qas("下列哪一种是你的一般生活取向？", {"text":"只管做吧","value":0,"tag":"S"}, {"text":"找出多种不同选择","value":0,"tag":"N"});
    this.qaes[2] = new Qas("你喜欢自己的哪种性格？", {"text":"冷静而理性","value":0,"tag":"T"}, {"text":"热情而体谅","value":0,"tag":"F"});
    this.qaes[3] = new Qas("你擅长", {"text":"在有需要时间时同时协调进行多项工作","value":0,"tag":"P"}, {"text":"专注在某一项工作上，直至把它完成为止","value":0,"tag":"J"});
    this.qaes[4] = new Qas("你参与社交聚会时", {"text":"总是能认识新朋友","value":0,"tag":"E"}, {"text":"只跟几个亲密挚友呆在一起	  ","value":0,"tag":"I"});
    this.qaes[5] = new Qas("当你尝试了解某些事情时，一般你会", {"text":"先要了解细节","value":0,"tag":"S"}, {"text":"先了解整体情况，细节容后再谈","value":0,"tag":"N"});
    this.qaes[6] = new Qas("你对下列哪方面较感兴趣？", {"text":"知道别人的想法","value":0,"tag":"T"}, {"text":"知道别人的感受","value":0,"tag":"F"});
    this.qaes[7] = new Qas("你较喜欢下列哪个工作？", {"text":"能让你能迅速和即时做出反应","value":0,"tag":"P"}, {"text":"能让你定出目标，然后逐步达成目标的工作","value":0,"tag":"J"});
    this.qaes[8] = new Qas("下列哪一种说法较适合你？", {"text":"当我与友人尽兴后，我会感到精力充沛，并会继续追求这种欢娱","value":0,"tag":"E"}, {"text":"当我与友人尽兴后，我会感到疲累，觉得需要一些空间","value":0,"tag":"I"});
    this.qaes[9] = new Qas("下列哪一种说法较适合你？", {"text":"我较有兴趣知道别人的经历，例如他们做过什么？认识什么人？","value":0,"tag":"S"}, {"text":"我较有兴趣知道别人的计划和梦想，例如他们会往哪里去？憧憬什么？","value":0,"tag":"N"});
    this.qaes[10] = new Qas("下列哪一种说法较适合你？", {"text":"我擅长订出一些可行的计划","value":0,"tag":"T"}, {"text":"我擅长促成别人同意一些计划，并衷力合作","value":0,"tag":"F"});
    this.qaes[11] = new Qas("下列哪一种说法较适合你？", {"text":"我会突然尝试做某些事，看看会有什么事情发生","value":0,"tag":"P"}, {"text":"我尝试做任何事前，都想事先知道可能有什么事情发生","value":0,"tag":"J"});
    this.qaes[12] = new Qas("下列哪一种说法较适合你？", {"text":"我经常边说话，边思考","value":0,"tag":"E"}, {"text":"我在说话前，通常会思考要说的话","value":0,"tag":"I"});
    this.qaes[13] = new Qas("下列哪一种说法较适合你？", {"text":"四周的实际环境对我很重要，而且会影响我的感受","value":0,"tag":"S"}, {"text":"如果我喜欢所做的事情，气氛对我而言并不是那么重要","value":0,"tag":"N"});
    this.qaes[14] = new Qas("下列哪一种说法较适合你？", {"text":"我喜欢分析，心思缜密","value":0,"tag":"T"}, {"text":"我对人感兴趣，关心他们所发生的事","value":0,"tag":"F"});
    this.qaes[15] = new Qas("下列哪一种说法较适合你？", {"text":"即使已出计划，我也喜欢探讨其它新的方案","value":0,"tag":"P"}, {"text":"一旦定出计划，我便希望能依计行事","value":0,"tag":"J"});
    this.qaes[16] = new Qas("下列哪一种说法较适合你？", {"text":"认识我的人，一般都知道什么对我来说是重要的","value":0,"tag":"E"}, {"text":"除了我感觉亲近的人，我不会对人说出什么对我来说是重要的","value":0,"tag":"I"});
    this.qaes[17] = new Qas("下列哪一种说法较适合你？", {"text":"如果我喜欢某种活动，我会经常进行这种运动","value":0,"tag":"S"}, {"text":"我一旦熟悉某种活动后，便希望转而尝试其它新的活动","value":0,"tag":"N"});
    this.qaes[18] = new Qas("下列哪一种说法较适合你？", {"text":"当我作决定的时候，我更多地考虑正反两面的观点，并且会推理与质证","value":0,"tag":"T"}, {"text":"当我作决定的时候，我会更多地了解其他人的想法，并希望能够达成共识","value":0,"tag":"F"});
    this.qaes[19] = new Qas("下列哪一种说法较适合你？", {"text":"当我专注做某件事情时，需要不时停下来休息","value":0,"tag":"P"}, {"text":"当我专注做某件事情时，不希望受到任何干扰","value":0,"tag":"J"});
    this.qaes[20] = new Qas("下列哪一种说法较适合你？", {"text":"我独处太久，便会感到不安","value":0,"tag":"E"}, {"text":"若没有足够的自处时间，我便会感到烦躁不安","value":0,"tag":"I"});
    this.qaes[21] = new Qas("下列哪一种说法较适合你？", {"text":"我对一些没有实际用途的意念不感兴趣","value":0,"tag":"S"}, {"text":"我喜欢意念本身，并享受想象意念的过程","value":0,"tag":"N"});
    this.qaes[22] = new Qas("下列哪一种说法较适合你？", {"text":"当进行谈判时，我依靠自己的知识和技巧","value":0,"tag":"T"}, {"text":"当进行谈判时，我会拉拢其他人至同一阵线","value":0,"tag":"F"});
    this.qaes[23] = new Qas("当你放假时，你多数会", {"text":"随遇而安，做当时想做的事","value":0,"tag":"P"}, {"text":"为想做的事情订出时间表","value":0,"tag":"J"});
    this.qaes[24] = new Qas("当你放假时，你多数会", {"text":"花多些时间与别人共度","value":0,"tag":"E"}, {"text":"花多些时间自己阅读、散步或者发白日梦","value":0,"tag":"I"});
    this.qaes[25] = new Qas("当你放假时，你多数会", {"text":"返回你喜欢的地方度假","value":0,"tag":"S"}, {"text":"选择前往一些你从未到达的地方","value":0,"tag":"N"});
    this.qaes[26] = new Qas("当你放假时，你多数会", {"text":"带着一些与工作或学校有关的事情","value":0,"tag":"T"}, {"text":"处理一些对你重要的人际关系","value":0,"tag":"F"});
    this.qaes[27] = new Qas("当你放假时，你多数会", {"text":"忘记平时发生的事情，专心享乐","value":0,"tag":"P"}, {"text":"想着假期过后要准备的事情","value":0,"tag":"J"});
    this.qaes[28] = new Qas("当你放假时，你多数会", {"text":"参观著名景点","value":0,"tag":"E"}, {"text":"花时间逛博物馆和一些较为幽静的地方","value":0,"tag":"I"});
    this.qaes[29] = new Qas("当你放假时，你多数会", {"text":"在喜欢的餐厅用膳","value":0,"tag":"S"}, {"text":"尝试新的菜式","value":0,"tag":"N"});
    this.qaes[30] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"别人认为我会公正处事，并且尊重他人","value":0,"tag":"T"}, {"text":"别人相信在他们有需要时，我会在他们身边","value":0,"tag":"F"});
    this.qaes[31] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"随机应变","value":0,"tag":"P"}, {"text":"按照计划行事","value":0,"tag":"J"});
    this.qaes[32] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"坦率","value":0,"tag":"E"}, {"text":"深沉","value":0,"tag":"I"});
    this.qaes[33] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"留意事实","value":0,"tag":"S"}, {"text":"注重事实","value":0,"tag":"N"});
    this.qaes[34] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"知识广博","value":0,"tag":"T"}, {"text":"善解人意","value":0,"tag":"F"});
    this.qaes[35] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"容易适应转变","value":0,"tag":"P"}, {"text":"处事井井井有条","value":0,"tag":"J"});
    this.qaes[36] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"爽朗","value":0,"tag":"E"}, {"text":"沉温","value":0,"tag":"I"});
    this.qaes[37] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"实事求是","value":0,"tag":"S"}, {"text":"富想象力","value":0,"tag":"N"});
    this.qaes[38] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"喜欢询问实情","value":0,"tag":"T"}, {"text":"喜欢探索感受","value":0,"tag":"F"});
    this.qaes[39] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"不断接受新意见","value":0,"tag":"P"}, {"text":"着眼达成目标","value":0,"tag":"J"});
    this.qaes[40] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"率直","value":0,"tag":"E"}, {"text":"内敏","value":0,"tag":"I"});
    this.qaes[41] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"事实求是","value":0,"tag":"S"}, {"text":"具远大目光","value":0,"tag":"N"});
    this.qaes[42] = new Qas("下列哪个说法最能贴切形容你对自己的看法？", {"text":"公正","value":0,"tag":"T"}, {"text":"宽容","value":0,"tag":"F"});
    this.qaes[43] = new Qas("你会倾向", {"text":"暂时放下不愉快的事情，直至有心情时才处理","value":0,"tag":"P"}, {"text":"及时处理不愉快的事情，务求把它们抛诸脑后","value":0,"tag":"J"});
    this.qaes[44] = new Qas("你会倾向", {"text":"自己的工作被欣赏，即使你自己并不满意","value":0,"tag":"E"}, {"text":"创造一些有长远价值的东西，但不一定需要别人知道是你做的","value":0,"tag":"I"});
    this.qaes[45] = new Qas("你会倾向", {"text":"在自己有兴趣的范畴，积累丰富的经验","value":0,"tag":"S"}, {"text":"有各式各样不同的经验","value":0,"tag":"N"});
    this.qaes[46] = new Qas("哪一句较能表达你的看法？", {"text":"感情用事的人较容易犯错","value":0,"tag":"T"}, {"text":"逻辑思维会令人自以为是，因而容易犯错","value":0,"tag":"F"});
    this.qaes[47] = new Qas("哪一句较能表达你的看法？", {"text":"三思而后行","value":0,"tag":"P"}, {"text":"犹豫不决必失败","value":0,"tag":"J"});
  }

  createCards(){
    for(let i:number = 0;i < 6;i++){
        this.cards.A[i] = new Card(i,false);
    }
    for(let i = 0;i < 6;i++){
        this.cards.B[i] = new Card(i,false);
    }

    console.log(this.cards);

  }

  ngOnInit() {
      this.btnText = "下一题";
      this.createCards();
  }

  resetBtn(){
      let toEmpty = function (arr){
       arr.forEach(function (v){
            v.selected = false;
        });
      }

      toEmpty(this.cards.A);
      toEmpty(this.cards.B);
  }


  onChange(target,tag1,tag2){
    this.qaes[this.id][tag1].value = target.value;
    this.qaes[this.id][tag2].value = 5 - this.qaes[this.id][tag1].value;

    if(this.prevBtn.A.value !== ""){
      this.resetBtn();
    }

    this.cards[tag1][target.value].selected = true;
    this.cards[tag2][5 - target.value].selected = true;

    this.prevBtn.A.value = target.value;
    this.prevBtn.B.value = 5 - target.value;

    /*go do ing*/
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
      this.resetBtn();
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

      this.gameEnd = true;

      this.typeUrl = "https://cn.bing.com/search?q=mbti+" + this.type.join("");

  }

}
