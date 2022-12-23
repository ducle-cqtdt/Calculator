/**
 * description of this function
 * @param param1
 */
// export function functionName(param1: string): number {

import { BACKSPACE } from "src/constants/general.constant";

// }

export function preventInputText(event: any) {
  const pattern = /[0-9-.]/;
  let inputChar = String.fromCharCode(event.charCode);
  let value = event.target.value;
  if (value === '' && inputChar === '.') {
    event.target.value = '0.';
  }
  if (
    event.keyCode !== BACKSPACE &&
    (!pattern.test(inputChar) ||
      ((value !== '' || value.includes('-')) && inputChar === '-') ||
      (event.target.value.includes('.') && inputChar === '.'))
  ) {
    event.preventDefault();
  }
}
