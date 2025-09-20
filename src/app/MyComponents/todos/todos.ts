import { Component, OnInit } from '@angular/core';
import { Todo } from './../../Todo';
import { CommonModule } from '@angular/common';
import { TodoItem } from './../../MyComponents/todo-item/todo-item';
import { AddTodo } from './../../MyComponents/add-todo/add-todo';

@Component({
  selector: 'app-todos',
  standalone: true,                // if using standalone components
  imports: [CommonModule, TodoItem, AddTodo],
  templateUrl: './todos.html',
  styleUrls: ['./todos.css']        // ⚠️ correct property name: styleUrls, not styleUrl
})
export class Todos implements OnInit {
  localitem: string | null = '';
  tdo: Todo[] = [];

  constructor() {}

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.localitem = localStorage.getItem("tdo");
      if (this.localitem == null) {
        this.tdo = [];
      } else {
        this.tdo = JSON.parse(this.localitem);
      }
    }
  }

  deletetodo(todo: Todo) {
    const index = this.tdo.indexOf(todo);
    if (index > -1) {
      this.tdo.splice(index, 1);
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem("tdo", JSON.stringify(this.tdo));
      }
    }
  }

  addTodo(todo: Todo) {
    this.tdo.push(todo);
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem("tdo", JSON.stringify(this.tdo));
    }
  }
}
