import { Operation } from '../../interfaces/operation';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {

  @Output() getHistoryOperation = new EventEmitter<Operation>();
  histories: Array<Operation> = [];
  constructor() {}

  ngOnInit(): void {}

  addHistory(operation: Operation) {
    this.histories.push(operation);
  }

  selectHistory(history: Operation) {
    this.getHistoryOperation.emit(history);
  }
  historyTrackByFn(index: number, history: Operation) {
    return history;
  }
}
