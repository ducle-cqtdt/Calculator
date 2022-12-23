import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toOperator',
})
export class ToOperatorPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'add':
        return '+';

      case 'minus':
        return '-';

      case 'multiply':
        return 'x';

      case 'divide':
        return '/';

      default:
        return '';
    }
  }
}
