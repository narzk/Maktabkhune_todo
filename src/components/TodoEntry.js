import React,{ Component } from "react";
import todoStore from "../store/TodoStore"


class TodoEntry extends Component{
    state={
        value : ""
    }
    handleKeyDown=event=>{
            if(event.keyCode!==13){
            return;
        }
        event.preventDefault()
        todoStore.addTodo(this.state.value)
       
        
      //  console.log(todoStore.todos)
        this.setState({
            value: ''
        });
     
    }
    render(){
        return(
            <header className="header">
            <h1>todo</h1>
            <input type="text" className="new-todo" value={this.state.value} placeholder="what needs to be done?"
            onChange={event=>this.setState({value: event.target.value})}
            onKeyDown={event=>this.handleKeyDown(event)}/>

            </header>
        );
    }
}
export default TodoEntry