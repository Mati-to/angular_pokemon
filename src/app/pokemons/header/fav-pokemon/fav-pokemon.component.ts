import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// Servicio
import { PokeService } from 'src/app/services/poke.service';
import Swal from 'sweetalert2';

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
        },
        error: () => Swal.fire('Error', 'Hubo un error inesperado.', 'error')
      })
    }
  }

  sendPokeHeader() {
    return this.pokeHeader.emit(this.pokemon);
  }

}
