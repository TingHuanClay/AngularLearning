import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor() { }

  private list: string[] = [];

  /**
   * Add Todo List
   */
  add(title: string): void {
    if(title || title.trim()) {
      this.list.push(title);
    }
  }

  /**
   * get the todo list
   * @returns {string[]}
   * @memberof TodoListService
   */
  getList(): string[] {
    return this.list;
  }
}
