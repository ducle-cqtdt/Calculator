import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toOperator',
})
export class ToOperatorPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'add': {
        value = '+';
        break;
      }
      case 'minus': {
        value = '-';
        break;
      }
      case 'multiply': {
        value = 'x';
        break;
      }
      case 'divide': {
        value = '/';
        break;
      }
    }
    return value;
  }
}
