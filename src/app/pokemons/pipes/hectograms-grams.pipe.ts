import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hectogramsGrams'
})
export class HectogramsGramsPipe implements PipeTransform {

  transform(value: number): number {
    return parseFloat((value * 0.1).toFixed(2));
  }

}
