import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginateOverview'
})
export class PaginateOverviewPipe implements PipeTransform {

  transform(letras: string[], page: number) {
    
    return letras.slice(page, page + 4)
  }
}
