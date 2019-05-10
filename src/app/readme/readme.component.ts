import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})

export class ReadmeComponent implements OnInit {
  readMeClass:string = "";  
  // @Input()readed:boolean;
  //@Output()change:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    console.log(2);
  }

  // readMeBtnHandle(){
  //  this.readed = false;
  //  this.change.emit(this.readed);
  // }

}
