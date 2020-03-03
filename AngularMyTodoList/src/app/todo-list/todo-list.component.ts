import { Component, OnInit } from '@angular/core';
import {TodoListService} from './todo-list.service';

import { Todo } from './todo.model';
import { TodoStatusType } from './todo-status-type.enum';

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

  ngOnInit() {
  }

  /**
   * enum type of the todo list
   *
   * @memberof TodoListComponent
   */
  todoStatusType = TodoStatusType;

  /**
   * current status of the todo list
   *
   * @private
   * @memberof TodoListComponent
   */
  private status = TodoStatusType.All;

  /**
   * Add Todo List
   * @param {HTMLInputElement} inputRef - TextBox
   * @memberof TodoListComponent
   */
  addTodo(inputRef: HTMLInputElement): void {
    const todo = inputRef.value.trim();
    if (todo) {
      this.todoListService.add(todo);
      inputRef.value = '';
    }
  }

  /**
   * get the todo list
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */
  getList(): Todo[] {
    let list: Todo[] = [];
    switch (this.status) {
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;
      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;
      default:
        list = this.todoListService.getList();
        break;
    }
    return list;
  }

  /**
   * remove the i-th item in todo list
   *
   * @param {number} index - index of the item
   * @memberof TodoListComponent
   */
  remove(index: number): void {
    this.todoListService.remove(index);
  }

  /**
   * edit the todo item
   *
   * @param {Todo} todo
   * @memberof TodoListComponent
   */
  edit(todo: Todo): void {
    todo.editable = true;
  }

  /**
   * Update the todo item
   *
   * @param {Todo} todo - original todo item object
   * @param {string} newTitle - new title for the todo object
   * @memberof TodoListComponent
   */
  update(todo: Todo, newTitle: string): void {
  
    if (!todo.editing) {
      return;
    }
  
    const title = newTitle.trim();
  
    // check the validity of the title
    if (title) {
      todo.setTitle(title);
      todo.editable = false;
  
    // delete the item if New title is null or empty
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== -1) {
        this.remove(index);
      }
    }
  }

  /**
   * Cancel Editing
   *
   * @param {Todo} todo - the todo item
   * @memberof TodoListComponent
   */
  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  /**
   * filter the todo list with status is Completed or Not
   *
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */
  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }

  /**
   * get the sublist of the todo list which are completed
   *
   * @returns {Todo[]}
   * @memberof TodoListComponent
   */
  getCompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  /**
   * set the status of the todo list
   *
   * @param {number} status 
   * @memberof TodoListComponent
   */
  setStatus(status: number): void {
    this.status = status;
  }

  /**
   * check the status
   *
   * @param {number} status - 
   * @returns {boolean}
   * @memberof TodoListComponent
   */
  checkStatus(status: number): boolean {
    return this.status === status;
  }

  /**
   * remove all completed items
   *
   * @memberof TodoListComponent
   */
  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }
}
