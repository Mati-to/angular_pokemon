import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent  {

  pokemon: any = '';

  getPokeHeaderInfo(data: any) {
    this.pokemon = data;
    return this.pokemon;
  }
}
