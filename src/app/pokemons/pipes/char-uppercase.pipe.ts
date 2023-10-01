import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'charUppercase'
})
export class CharUppercasePipe implements PipeTransform {

  transform(pokeName: string): string {
    if(!pokeName) return '';

    const charUppercase = pokeName.charAt(0).toUpperCase() + pokeName.slice(1).toLocaleLowerCase();
    return charUppercase;
  }

}
