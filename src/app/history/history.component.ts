import { Operation } from './../interfaces/operation';
import { CalculatorComponent } from './../calculator/calculator.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  histories:Array<Operation>= [];
  constructor() {}

  ngOnInit(): void {

  }

  addHistory(operation:Operation){
    this.histories.push(operation);
  }

}
