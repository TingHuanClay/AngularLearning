import { Component, OnInit } from '@angular/core';
import {TodoListService} from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoListService: TodoListService) { }
  // previous line is exactly the same as following 3 lines

  // private todoListService: TodoListService;
  // constructor(private todoListService: TodoListService) {
  //   this.todoListService = todoListService;
  // }


  ngOnInit(): void {
  }

  /**
   * Add Todo List
   * @param {HTMLInputElement} inputRef - TextBox
   * @memberof TodoListComponent
   */
  addTodo(inputRef: HTMLInputElement): void {
    // console.log(inputRef.value);
    // inputRef.value = '';

    const todo = inputRef.value.trim();
    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  /**
   * get the todo list
   * @returns {string[]}
   * @memberof TodoListComponent
   */
  getList(): string[] {
    return this.todoListService.getList();
  }
}
