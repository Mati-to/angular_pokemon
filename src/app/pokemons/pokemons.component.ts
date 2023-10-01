import { Component, OnInit } from '@angular/core';

// Servicio - Interface
import { PokeService } from '../services/poke.service';
import { PokemonTable } from '../interfaces/pokeList.interface';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons: PokemonTable[];
  pokeSelected?: any;
  page: number = 0;
  search: string;
  disable: boolean = false;

  constructor(
    private pokeService: PokeService
  ) { }

  ngOnInit(): void {
    this.getPokeList();
  }

  // PokeList
  getPokeList() {
    return this.pokeService.getPokemonList()
      .subscribe( (resp: PokemonTable[]) => this.pokemons = resp );
  }

  pokeSearch(pokemon: string) {
    this.search = pokemon.toLowerCase();
    return this.page = 0;
  }
  
  nextPage() {
    return this.page += 5;
  }
  
  prevPage() {
    if(this.page === 0) return this.page;
    return this.page -= 5;
  }

  // PokeDetails
  getPokeName(nombre:string) {
    return this.pokeSelected = nombre;
  }
}
