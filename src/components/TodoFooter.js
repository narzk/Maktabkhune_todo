import React, { Component } from "react";
import todoStore from "../store/TodoStore";
import { observer } from "mobx-react";
import ClearCompleted from "./ClearCompleted";

@observer

class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.activeTodos = this.activeTodos.bind(this);
        this.completedTodos = this.completedTodos.bind(this);
        this.allTodos = this.allTodos.bind(this);

        this.state = {

            selectedAll: true,
            selectedActive: false,
            selectedComplete: false
        };
    }
    allTodos() {
        this.setState({
            selectedAll: true,
            selectedActive: false,
            selectedComplete: false
        });
        todoStore.All();
    }
    activeTodos() {
        this.setState({
            selectedAll: false,
            selectedActive: true,
            selectedComplete: false
        });
        todoStore.Active();
    }
    completedTodos() {
        this.setState({
            selectedAll: false,
            selectedActive: false,
            selectedComplete: true
        });
        todoStore.Complete();
    }

    render() {
        if (todoStore.backuptodos.length > 0) {
            return (
                <div className="footer">
                    <button className="todo-count">
                        <span>
                            {todoStore.backuptodos.filter(todo => todo.completed === false).length}
                        </span>{" "}items left
                        </button>
                    <ul className="filters">
                        <li onClick={this.allTodos}>
                            <button>
                                <a className={this.state.selectedAll ? "selected" : " "}>{" "}All</a>
                            </button>
                        </li>
                        <li onClick={this.activeTodos}>
                            <button type="submit">
                                <a className={this.state.selectedActive ? "selected" : " "}>{" "}Active</a>
                            </button>
                        </li>
                        <li onClick={this.completedTodos}>
                            <button type="submit">
                                <a className={this.state.selectedComplete ? "selected" : " "}>{" "}Completed</a>
                            </button>
                        </li>
                    </ul>
                    <ClearCompleted />
                </div>
            );
        } else {
            return null;
        }
    }
}
export default TodoFooter;
