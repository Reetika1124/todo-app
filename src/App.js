import React, { Component } from 'react';
import NewTodo from './NewTodo'
import Todos from './Todos'


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todos: ['laundry', 'dishes']
    }
  }

  addTodo = (todoText) => {
    const newTodos = [ ...this.state.todos, todoText ]
    
    this.setState({ todos: newTodos })
  }
  removeTodo = (index) => {
    const newTodos = this.state.todos.filter((el, id) => id !== index)

    this.setState({ todos: newTodos })
  }

  render() {
    return (
      <div>
        <NewTodo addTodo={this.addTodo} />
        <Todos 
          todos={this.state.todos}
          removeTodo={this.removeTodo} />
      </div>
    )
  }
}

export default App;
