import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'MBTI人格类型测试';
  isRead:boolean = true;

  isReadChange(event:boolean){
    this.isRead = event;
    console.log(this.isRead);
  }
}
