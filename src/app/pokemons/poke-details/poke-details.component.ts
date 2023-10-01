import { Component, Input, OnChanges } from '@angular/core';

// Servicio - Otros
import { PokeService } from 'src/app/services/poke.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poke-details',
  templateUrl: './poke-details.component.html',
  styleUrls: ['./poke-details.component.css'],
})
export class PokeDetailsComponent implements OnChanges {
  // Resultados del pokemon que viene desde el Componente padre
  @Input('pokemon') pokemonName: string = '';
  pokemon?: any;

  constructor(private pokeService: PokeService) {}

  ngOnChanges(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails() {
    if(this.pokemonName !== undefined) {
      this.pokeService.getPokeDetails(this.pokemonName).subscribe({
        next: (data: any) => this.pokemon = data,
        error: () => Swal.fire('Error', 'Hubo un error inesperado.', 'error')
      });
    }
  }

  pokemonToFavs() {
    this.pokeService.setFavPokemon(this.pokemon)
    return Swal.fire('Listo!', 'Pokémon añadido a "Favorito".', 'success')
  }
}
