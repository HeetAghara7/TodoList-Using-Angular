import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../Todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css'
})
export class AddTodo {
 title:string;
 dest:string;
  @Output() todoAdd : EventEmitter<Todo> = new EventEmitter();

  onSubmit()
  {
    const todo={
      sno : 8,
      title:this.title,
      dest : this.dest,
      active: true
    }
    this.todoAdd.emit(todo);
  }
}
