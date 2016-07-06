import React from 'react'
import { render } from 'react-dom'

import Header from './layouts/Header'

import AddForm from './components/AddForm'
import TodoList from './components/TodoList'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    $.get('/todos', (data) => {
      this.setState({
        todos: data
      })
    })
  }

  addTodo (todo) {
    $.post('/todo', todo, (data) => {
      this.setState({
        todos: this.state.todos.concat(data)
      })
    })
  }

  filterTodos(todo) {
    return todo.completed === false
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

  deleteTodo(todo) {
    console.log(todo)
  }

  render() {
    return (
      <div>
        <Header />

        <div className="container">
          <AddForm addTodo={this.addTodo.bind(this)}/>

          <TodoList todos={this.state.todos.filter(this.filterTodos)} completeTodo={this.completeTodo.bind(this)} deleteTodo={this.deleteTodo.bind(this)}/>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('App'));
