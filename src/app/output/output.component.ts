import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css', '../left/left.component.css'],
})
export class OutputComponent implements OnInit, OnChanges {
  private pFirstNumber = 0;
  @Input() set firstNumber(val: number) {
      this.pFirstNumber = val;
      this.sum();
  };

  get firstNumber(): number {
    return this.pFirstNumber;
  }

  private pSecondNumber = 0;
  @Input() set secondNumber(val: number) {
      this.pSecondNumber = val;
      this.sum();
  };

  get secondNumber(): number {
    return this.pSecondNumber;
  }
  result: number = 0;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    // if(this.firstNumber === '' || this.secondNumber === ''){

    // }else{
    //   this.result = String(Number(this.firstNumber) + Number(this.secondNumber));
    // }
  }

  ngOnInit(): void {
    // todo: complete later0
  }

  sum(){
    this.result = this.firstNumber + this.secondNumber;
  }

}
