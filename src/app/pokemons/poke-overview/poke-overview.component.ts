import { Component, OnInit } from '@angular/core';

// Servicio - Interface
import { PokemonTable } from 'src/app/interfaces/pokeList.interface';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-poke-overview',
  templateUrl: './poke-overview.component.html',
  styleUrls: ['./poke-overview.component.css'],
})
export class PokeOverviewComponent implements OnInit {
  pokemonList: PokemonTable[] = [];
  pokeCuenta: { [key: string]: number } = {};
  alfabeto: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  page: number = 0;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokeService.getPokemonList().subscribe({
      next: (data: PokemonTable[]) => {
        this.pokemonList = data;
        this.pokemonsAlphabetCount();
      },
    });
  }

  pokemonsAlphabetCount() {
    this.pokemonList.forEach((pokemon) => {
      const firstLetter = pokemon.name.charAt(0);
      this.pokeCuenta[firstLetter] = (this.pokeCuenta[firstLetter] || 0) + 1;
    });
  }

  nextPage() {
    return (this.page += 5);
  }

  prevPage() {
    if (this.page === 0) return this.page;
    return (this.page -= 5);
  }
}
