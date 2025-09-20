import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todos } from './MyComponents/todos/todos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Todos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Todo-list';
}
