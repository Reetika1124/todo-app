import React from 'react'
import Todo from './Todo'

function Todos(props){
  return (
    <ul>
      {
        props.todos.map((ele, id) => {
          return <Todo 
            key={id}
            todo={ele} 
            removeTodo={() => props.removeTodo(id)}/>
        })
      }
    </ul>
  )
}

export default Todos