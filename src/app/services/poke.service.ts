import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, Subject } from 'rxjs';

// Interfaces 
import { PokeAPI, PokemonTable } from '../interfaces/pokeList.interface';


@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl: string = 'https://pokeapi.co/api/v2';
  private favPokemonSubject: any = new Subject<any>();
  favPokemon$ = this.favPokemonSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getPokemonList(): Observable<PokemonTable[]> {
    return this.http.get<PokeAPI>(`${this.baseUrl}/pokemon?limit=1300`)
      .pipe(
        map( this.pokemonListMap ) 
      )
  }

  private pokemonListMap(resp: PokeAPI): PokemonTable[] {
    const pokeList = resp.results.map( resp => {
      const arr: string[] = resp.url.split( '/' );
      const pokeID: string = arr[6];
      const pokeImage: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeID}.png`;

      return {
        id: pokeID,
        name: resp.name,
        image: pokeImage
      }
    })
    return pokeList;
  }

  getPokeDetails(nombre: string) {
    return this.http.get(`${this.baseUrl}/pokemon/${nombre}`)
      .pipe(
        map( this.mapPokeDetails )
      )
  }

  mapPokeDetails(resp: any) {
    const { id, name, height, sprites, weight, species, types, abilities } = resp;
    return {
      id, 
      name, 
      height, 
      image: sprites.front_default, 
      weight,
      species, types, abilities
    }
  }

  setFavPokemon(pokemon: any) {
    return this.favPokemonSubject.next(pokemon)
  }

}
