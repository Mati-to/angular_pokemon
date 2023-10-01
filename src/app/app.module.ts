import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsModule } from './pokemons/pokemons.module';

// Componente principal
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule, PokemonsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
