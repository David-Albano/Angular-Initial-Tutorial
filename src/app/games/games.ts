import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
  @Input() username = ''
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
      this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Horizon Zero Dan'
    },
    {
      id: 2,
      name: 'Uncharted 4'
    },
    {
      id: 3,
      name: 'Fifa'
    }
  ]
}
