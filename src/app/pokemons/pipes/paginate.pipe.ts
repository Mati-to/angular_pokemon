import { Pipe, PipeTransform } from '@angular/core';

// Interface
import { PokemonTable } from 'src/app/interfaces/pokeList.interface';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(argPokemons: PokemonTable[], page:number, pokeSearch:string = ''): PokemonTable[] {
    
    if(!argPokemons) return [];

    if(pokeSearch.length === 0) return argPokemons.slice(page, page + 5);

    const search = argPokemons.filter( resp => {
      return resp.name.includes(pokeSearch)
    })

    return search.slice(page, page + 5)
  }
}
