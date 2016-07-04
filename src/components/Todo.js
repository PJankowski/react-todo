import React from 'react'

export default class Todo extends React.Component {
  completeTodo() {
    this.props.completeTodo(this.props.todo)
  }

  render() {
    var completed;

    if (this.props.todo.completed === true) {
      completed = 'completed'
    } else {
      completed = ''
    }

    return (
      <li className={completed} onClick={this.completeTodo.bind(this)}>{this.props.todo.text}</li>
    )
  }
}
