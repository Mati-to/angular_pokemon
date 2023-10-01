import { Component, EventEmitter, OnChanges, OnInit, Output } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-fav-pokemon',
  templateUrl: './fav-pokemon.component.html',
  styles: [
  ]
})
export class FavPokemonComponent implements OnInit {

  favPokemon$: any = this.pokeService.favPokemon$;
  pokemon: any = '';

  @Output() pokeHeader = new EventEmitter();

  // Pokemon:
  /* name, id, heigt, weight, types, species
  */

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    if(this.favPokemon$ !== undefined) {
      this.favPokemon$.subscribe({
        next: (x: any) => {
          this.pokemon = x
        }
      })
    }
  }

  sendPokeHeader() {
    return this.pokeHeader.emit(this.pokemon);
  }

}
