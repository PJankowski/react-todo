import React from 'react'

export default class Todo extends React.Component {
  completeTodo() {
    this.props.completeTodo(this.props.todo)
  }

  deleteTodo() {
    this.props.deleteTodo(this.props.todo)
  }

  render() {
    var completed;

    if (this.props.todo.completed === true) {
      completed = 'text-danger'
    } else {
      completed = ''
    }

    var marginBottom = {
      marginBottom: "20px"
    }

    var marginLeft = {
      marginLeft: "20px"
    }

    var smallMarginLeft = {
      marginLeft: "10px"
    }

    return (
      <li className={completed} style={marginBottom}>
        <div className="checkbox">
          <input type="checkbox" onChange={this.completeTodo.bind(this)} />
        </div>
        <span>{this.props.todo.text}</span>
        <button className="btn btn-default btn-sm" style={marginLeft}>
          <i className="glyphicon glyphicon-edit"></i>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" style={smallMarginLeft} onClick={this.deleteTodo.bind(this)}>
          <i className="glyphicon glyphicon-remove"></i>
          Delete
        </button>
      </li>
    )
  }
}
