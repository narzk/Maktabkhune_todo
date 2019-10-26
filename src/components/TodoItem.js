import React,{ Component } from "react";
import { observer } from "mobx-react";
//import TodoItems from "./TodoItems"
//import TodoModel from "../store/TodoModel"
@observer
class TodoItem extends Component{
    

    onToggle=()=>{
        
      this.props.todo.toggle()
        
    }
    render(){
        const {todo}=this.props;
        //console.log(todo)
        return(
            <li className={todo.completed ? 'completed' : ''}>
            <div className="view">
                
                <input onChange={this.onToggle} type="checkbox" className="toggle" value="on" checked={todo.completed} />
                <label>{todo.title}</label>
                <button className="destry"/>
              </div>
            </li>
        );
    }
}
export default TodoItem;