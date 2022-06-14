import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  array: any = [
    { name: "rajesh", age: 26, gender: "male" },
    { name: "suresh", age: 32, gender: "male" },
    { name: "vinoth", age: 40, gender: "male" },
    { name: "rita", age: 14, gender: "female" },
    { name: "sushma", age: 23, gender: "female" },
    { name: "sunith", age: 17, gender: "female" },
    { name: "john", age: 32, gender: "male" }];
  data: any
  displayData: any = [];
  constructor() { }

  ngOnInit(): void {
    this.printData()
  }
  printData() {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].age > 18) {
        console.log(this.array[i])
        this.data = this.array[i]
        this.displayData.push(this.data)
        console.log(this.displayData)
      }
    }
  }
}
