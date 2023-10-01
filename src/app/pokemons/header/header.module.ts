import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './header.component';
import { FavPokemonComponent } from './fav-pokemon/fav-pokemon.component';

// Custom Pipes

@NgModule({
  declarations: [
    HeaderComponent,
    FavPokemonComponent,
  ],
  exports: [
    HeaderComponent,
    FavPokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeaderModule { }
