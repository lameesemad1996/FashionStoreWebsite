import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: String, ...args: any[]): any {
    return value.substr(0, 1);;
  }

}
