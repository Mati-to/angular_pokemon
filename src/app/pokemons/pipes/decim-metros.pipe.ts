import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimAMetros'
})
export class DecimMetrosPipe implements PipeTransform {

  transform(value: number): number {
    return parseFloat((value * 0.1).toFixed(2));
  }

}
