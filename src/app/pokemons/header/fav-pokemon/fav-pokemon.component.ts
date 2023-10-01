import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// Servicio
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-fav-pokemon',
  templateUrl: './fav-pokemon.component.html',
  styles: [
  ]
})
export class FavPokemonComponent implements OnInit {

  @Output() pokeHeader = new EventEmitter();

  favPokemon$: any = this.pokeService.favPokemon$;
  pokemon: any = '';

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    if(this.favPokemon$ !== undefined) {
      this.favPokemon$.subscribe({
        next: (data: any) => {
          this.pokemon = data
        }
      })
    }
  }

  sendPokeHeader() {
    return this.pokeHeader.emit(this.pokemon);
  }

}
