import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  title = 'Ass_Q-1';
  a: number = 18;
  test: String = 'Hello!!';
  date1 = new Date();
  b = [1, 2, 3, 4, 5];
  b1 = [
    {
      id: 11,
      name: 'Apple'
    },
    {
      id: 12,
      name: 'Mango'
    },
    {
      id: 13,
      name: 'Cat'
    }, 
    {
      id: 14,
      name: 'Dog'
    },
    {
      id: 15,
      name: 'Man'
    }];
  selectedItem?: String;
  OnSelect(e: any) {
    this.selectedItem = e.target.value
  }
  onmulti() {
    console.log("multi Selected");
  }
  constructor() { }

  ngOnInit(): void {
  }
}
