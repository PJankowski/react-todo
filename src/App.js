import React from 'react'
import { render } from 'react-dom'

import AddForm from './components/AddForm'
import TodoList from './components/TodoList'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          text: "Finish todo app",
          completed: false
        },
        {
          id: 2,
          text: "Go outside to smoke",
          completed: false
        },
        {
          id: 3,
          text: "Go to bed",
          completed: false
        }
      ]
    }
  }

  addTodo (data) {
    let id = data.id
    let text = data.text
    let completed = data.completed

    this.setState({
      todos: this.state.todos.concat({id, text, completed})
    })
  }

  completeTodo(todo) {
    var todos = this.state.todos

    this.state.todos.filter((old, i) => {
      if(old.id == todo.id)
        todos[i].completed = !todo.completed
    })

    this.setState({
      todos: todos
    })

  }

  render() {
    return (
      <div>
        <AddForm addTodo={this.addTodo.bind(this)}/>

        <TodoList todos={this.state.todos} completeTodo={this.completeTodo.bind(this)}/>
      </div>
    )
  }
}

render(<App />, document.getElementById('App'));
