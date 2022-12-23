import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { preventInputText } from 'src/helpers/general.helpers';
@Component({
  selector: 'app-first-input',
  templateUrl: './first-input.component.html',
  styleUrls: ['./first-input.component.css','../left/left.component.css'],
})
export class FirstInputComponent implements OnInit {

  @Output() eventFirstInputValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  inputNumber(event: any){
    this.eventFirstInputValue.emit(Number(event.target.value));
  }

  keyPress(event:any){
    preventInputText(event);
  }
}
