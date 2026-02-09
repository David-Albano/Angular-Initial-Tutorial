import { Component, signal } from '@angular/core';
import { User } from './user/user';
import { Comments } from './comments/comments';

@Component({
  selector: 'app-root',
  imports: [User, Comments],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  protected readonly title = signal('My first Angular app');
}
