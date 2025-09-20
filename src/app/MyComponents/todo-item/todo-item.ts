import { Component, Input , EventEmitter, Output} from '@angular/core';
import {Todo} from './../../../app/Todo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  imports: [CommonModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',

})
export class TodoItem {
 @Input() todo: Todo;
 @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();

 onClick(todo : Todo)
 {
    this.todoDelete.emit(todo);
 }
}
