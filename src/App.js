import React,{Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import TodoEntry from "./components/TodoEntry"
import TodoItems from "./components/TodoItems"
import TodoFooter from './components/TodoFooter';


class App extends Component {
  render() {
    return  (
      
      <div id="todoapp" className="todoapp">
        <TodoEntry/>
        <TodoItems/>
        <TodoFooter/>
      </div>
    
    );
  
  }

  
  
}

export default App;

