import React from 'react'

import Todo from './Todo'

export default class TodoList extends React.Component {
  completeTodo(todo) {
    this.props.completeTodo(todo)
  }

  deleteTodo(todo) {
    this.props.deleteTodo(todo)
  }

  render() {
    return (
      <ul className="list-unstyled">
        {this.props.todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} completeTodo={this.completeTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>
        })}
      </ul>
    )
  }
}
