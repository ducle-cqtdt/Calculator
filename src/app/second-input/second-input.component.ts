import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { preventInputText } from 'src/helpers/general.helpers';

@Component({
  selector: 'app-second-input',
  templateUrl: './second-input.component.html',
  styleUrls: ['./second-input.component.css', '../left/left.component.css']
})
export class SecondInputComponent implements OnInit {
  @Output() eventSecondInputValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
  inputNumber(event: any){
    this.eventSecondInputValue.emit(Number(event.target.value));
  }

  keyPress(event:any){
    preventInputText(event);
  }
}
