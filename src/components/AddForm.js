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
    var marginRight = {
      marginRight: "10px"
    }

    var marginBottom = {
      marginBottom: "10px"
    }

    return (
      <form onSubmit={this.addTodo.bind(this)} className="form-inline" style={marginBottom}>
        <div className="form-group" style={marginRight}>
          <input type="text" ref="text" placeholder="New todo" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Create Todo</button>
      </form>
    )
  }
}
