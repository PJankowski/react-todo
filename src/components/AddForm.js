import React from 'react'

export default class AddForm extends React.Component {
  addTodo(event) {
    event.preventDefault()

    var data = {
      text: this.refs.text.value,
      completed: false,
      id: Date.now()
    }

    this.props.addTodo(data)

    this.refs.text.value = ""
  }

  render() {
    return (
      <form onSubmit={this.addTodo.bind(this)}>
        <input type="text" ref="text" placeholder="New todo" />
        <button type="submit">Create Todo</button>
      </form>
    )
  }
}
