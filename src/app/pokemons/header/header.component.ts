import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  pokemon: any = '';

  ngOnInit(): void {

  }

  getPokeHeaderInfo(data: any) {
    this.pokemon = data;
    return this.pokemon;
  }
}
