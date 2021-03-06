import { Injectable } from '@angular/core';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  private list: Todo[] = [];

  /**
   * Add Todo List
   */
  add(title: string): void {
    if(title || title.trim()) {
      this.list.push(new Todo(title));
    }
  }

  /**
   * get the todo list
   * @returns {string[]}
   * @memberof TodoListService
   */
  getList(): Todo[] {
    return this.list;
  }

  /**
   * remove the i-th item in todo list
   * @param {number} index
   * @memberof TodoListService
   */
  remove(index: number): void {
    this.list.splice(index, 1);
  }

  /**
   * filter the todo list with status is Completed or Not
   *
   * @param {boolean} completed
   * @returns {Todo[]}
   * @memberof TodoListService
   */
  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }

  /**
   * remove all completed items
   *
   * @memberof TodoListService
   */
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
