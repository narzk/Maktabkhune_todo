import React, { Component } from "react";
import todoStore from "../store/TodoStore";
import { observer } from "mobx-react";

@observer

class ClearCompleted extends Component {
  constructor(props) {
    super(props)
    this.clear = this.clear.bind(this);
  }
  clear() {
    todoStore.Clear();
  }
  render() {
    if (todoStore.backuptodos.filter(
      todo => todo.completed === true).length > 0) {
      return (
        <button onClick={this.clear} className="clear-completed">
          Clear completed
        </button>
      );
    } else {
      return null;
    }
  }
}
export default ClearCompleted