import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fenceCase'
})
export class FenceCasePipe implements PipeTransform {

  transform(value: string): string {
    let temp: string[] = [];
    let counter: number = 0;
    value.trim().split('').forEach(el => {
      if (el!==' ') {
        counter%2===0? temp.push(el.toUpperCase()) : temp.push(el.toLowerCase());
        counter++;
      }
      else {
        temp.push(el);
      }
    });
    return temp.join('');
  }

}
