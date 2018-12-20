import { Component, OnInit ,Input} from '@angular/core';
import { qas } from '../question';

@Component({
  selector: 'app-qa',
  templateUrl: './qa.component.html',
  styleUrls: ['./qa.component.css']
})


export class QaComponent implements OnInit {
  id:number = 0;
  qaes = qas;

  constructor() { 
    
  }

  ngOnInit() {
      console.log(qas);
    
  }





}
