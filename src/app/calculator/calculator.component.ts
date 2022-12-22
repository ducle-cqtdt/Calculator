import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BACKSPACE } from 'src/constants/general.constant';
import { HistoryComponent } from './../history/history.component';
import { Operation } from './../interfaces/operation';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  @ViewChild(HistoryComponent) appHistory: HistoryComponent;

  constructor(private historyComponent: HistoryComponent) {
    this.appHistory = historyComponent;
  }

  operators = [
    {
      name: 'add',
      symbol: '+',
    },
    {
      name: 'minus',
      symbol: '-',
    },
    {
      name: 'multiply',
      symbol: 'x',
    },
    {
      name: 'divide',
      symbol: '/',
    },
  ];

  currentOperator = '=';
  result = '';

  formCalculator = new FormGroup({
    inputA: new FormControl('', Validators.required),
    inputB: new FormControl('', Validators.required),
  });
  isCalculate = false;
  ngOnInit(): void {}

  keyPress(event: any) {
    const pattern = /[0-9-.]/;
    let inputChar = String.fromCharCode(event.charCode);
    let value = event.target.value;
    if (value === '' && inputChar === '.') {
      event.target.value = '0.';
    }
    let inValid = false;
    // inValid = (value !== '' || value.includes('-')) && inputChar === '-';
    inValid = event.target.value.includes('.') && inputChar === '.';

    if (event.keyCode !== BACKSPACE && (!pattern.test(inputChar) || inValid)) {
      event.preventDefault();
    }
  }

  inputNumber() {
    this.getOperator('=');
  }

  getOperator(operator: string) {
    if (this.currentOperator === operator) {
      this.currentOperator = '=';
      this.result = '';
      this.isCalculate = false;
      return;
    }
    if (operator !== '=') {
      this.currentOperator = operator;
    }
    this.isCalculate = true;
    if (
      this.formCalculator.get('inputA')?.invalid ||
      this.formCalculator.get('inputB')?.invalid
    ) {
      this.result = '';
      return;
    }
    this.calculate();
  }

  calculate() {
    const numberA = Number(this.formCalculator.get('inputA')?.value);
    const numberB = Number(this.formCalculator.get('inputB')?.value);
    let result = 0;
    switch (this.currentOperator) {
      case 'add':
        result = numberA + numberB;
        break;
      case 'minus':
        result = numberA - numberB;
        break;
      case 'multiply':
        result = numberA * numberB;
        break;
      case 'divide':
        if (numberB === 0) {
          this.result = 'Cannot divide by zero!';
          return;
        } else {
          result = numberA / numberB;
        }
        break;
    }
    this.result = String(result);
    const operation: Operation = {
      firstNumber: numberA,
      secondNumber: numberB,
      operator: this.currentOperator,
      result: result,
    };
    this.appHistory.addHistory(operation);
  }
}
