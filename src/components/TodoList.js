import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  completeTodo(todo) {
    this.props.completeTodo(todo)
  }

  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} completeTodo={this.completeTodo.bind(this)}/>
        })}
      </ul>
    )
  }
}
