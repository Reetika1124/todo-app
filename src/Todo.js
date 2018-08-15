import React, { Component } from 'react'


class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      editing: false,
    }
  }

  onUpdate = () => {
    this.setState({ editing: !this.state.editing})
  }



  render() {
    return (
      <li>
        <button onClick={this.props.removeTodo}>
          Delete
        </button>
        {
          this.state.editing
          ? <span>
              <button onClick={ this.onUpdate }>
                Save
              </button >
              <input type="text" value={this.state.todo} /> 
            </span>
          : <span>
              <button onClick={ this.onUpdate }>
                Update
              </button>
              { this.props.todo } 
            </span>
        }
      </li>
    )
  }
}

export default Todo