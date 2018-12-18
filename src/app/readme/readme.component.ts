import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.css']
})

export class ReadmeComponent implements OnInit {
  readMeClass:string = "";  

  constructor() { }

  ngOnInit() {
  }

  readMeBtnHandle(){
    this.readMeClass = "none";
  }

}
