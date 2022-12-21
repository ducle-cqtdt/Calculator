import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  calculator = {
    inputA: '',
    inputB: '',
    operator: '=',
    result: '',
  };
  constructor() {}

  ngOnInit(): void {}

  calculate(operator: string) {
    if (operator != '=') {
      this.calculator.operator = operator;
    }
    if (this.calculator.inputA === '' || this.calculator.inputB === '') {
      return;
    }
    if (this.calculator.inputA == null || this.calculator.inputB == null) {
      this.calculator.result = "";
      return;
    }
    let numberA = Number(this.calculator.inputA);
    let numberB = Number(this.calculator.inputB);
    let result = 0;
    switch (this.calculator.operator) {
      case 'add': {
        result = numberA + numberB;
        break;
      }
      case 'minus': {
        result = numberA - numberB;
        break;
      }
      case 'multiply': {
        result = numberA * numberB;
        break;
      }
      case 'divide': {
        if (numberB == 0) {
          this.calculator.result = 'Cannot divide by zero!';
          return;
        } else {
          result = numberA / numberB;
        }
        break;
      }
      default:{
        return;
      }
    }
    this.calculator.result = String(result);
  }
}
