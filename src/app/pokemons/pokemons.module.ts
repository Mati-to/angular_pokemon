import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';

// Custom Pipes
import { CharUppercasePipe } from './pipes/char-uppercase.pipe';
import { PaginatePipe } from './pipes/paginate.pipe';
import { DecimMetrosPipe } from './pipes/decim-metros.pipe';
import { HectogramsGramsPipe } from './pipes/hectograms-grams.pipe';
import { PaginateOverviewPipe } from './pipes/paginate-overview.pipe';

// Components
import { PokemonsComponent } from './pokemons.component';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeOverviewComponent } from './poke-overview/poke-overview.component';

@NgModule({
  declarations: [
    PokemonsComponent,
    CharUppercasePipe,
    PaginatePipe,
    DecimMetrosPipe,
    HectogramsGramsPipe,
    PaginateOverviewPipe,
    PokeDetailsComponent,
    PokeOverviewComponent,
  ],
  exports: [
    PokemonsComponent,
    CharUppercasePipe,
    PaginatePipe,
    PokeDetailsComponent,
    PokeOverviewComponent,
  ],
  imports: [
    CommonModule, HeaderModule
  ]
})
export class PokemonsModule { }
