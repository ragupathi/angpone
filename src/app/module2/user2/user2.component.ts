import { Component, OnInit } from '@angular/core';
import{FormsModule}from '@angular/forms';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  title2='Calculator';
  num1:number;
  num2:number;
  result:number;
  add()
  {
    this.result = this.num1 + this.num2;
  }
  sub()
  {
    this.result = this.num1 - this.num2;
  }
  multiply()
  {
    this.result = this.num1 * this.num2;

  }
  divide()
  {
    this.result= this.num1 / this.num2;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
