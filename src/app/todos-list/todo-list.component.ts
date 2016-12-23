import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import {TodoModel} from '../common/todo.model';
import {TodoService} from '../common/todo.service';
import {TodoDetailComponent} from '../todo-detail/todo-detail.component';


@Component({
  selector:    'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers:   [TodoService]
})
export class TodoListComponent implements OnInit {
  todos: TodoModel[];
  selectedTodo: TodoModel;
  user: String = 'Angular 2';

  constructor(private service: TodoService) { }

  ngOnInit() {
    this.todos = this.service.getTodos();
  }

  selectTodo(todo: TodoModel) { this.selectedTodo = todo; }

  setTodoStyles(item:any){
    let styles= {
        'text-decoration': item.isDone ? 'line-through' : 'none',
        'font-weight': item.isImportant ? '600' : 'normal',
    };
    return styles;
  }
}
