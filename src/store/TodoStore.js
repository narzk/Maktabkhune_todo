import { observable, action } from 'mobx';
import TodoModel from './TodoModel'

class TodoStore {

  @observable todos = [];
  lastId = 0;

  @observable backuptodos = [];

  @action
  addTodo(title) {
    this.todos = this.backuptodos;
    this.todos.push(new TodoModel(this, title, false, this.lastId++, false));
    this.backuptodos = this.todos;
  }
  @action
  removeTodo(toid) {
    this.backuptodos.remove(this.backuptodos[toid]);
    this.lastId = this.lastId - 1;
    this.backuptodos.forEach(todo => {
      if (todo.id > toid) {
        todo.id = todo.id - 1;
      } else if (todo.id < toid) {
        todo.id = todo.id;
      }
    });
    this.todos = this.backuptodos;
  }
  @action
  All() {
      this.todos = this.backuptodos;
  }
  @action
  Active() {
      this.todos = this.backuptodos.filter(todo => todo.completed === false);
  }
  @action
  Complete() {
      this.todos = this.backuptodos.filter(todo => todo.completed === true);
  }
  @action
  Clear() {
    for (let i = 0; i < this.backuptodos.length; i++) {
      if (this.backuptodos[i].completed === true) {
        this.backuptodos.remove(this.backuptodos[i]);
        this.backuptodos.forEach(todo => {
          if (todo.id > i) {
            todo.id = todo.id - 1;
          } else if (todo.id < i) {
            todo.id = todo.id;
          }});
          this.lastId--;
        i--;
    }}
    this.todos = this.backuptodos;
  }
}

const todoStore = new TodoStore();
export default todoStore;
