import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const todo = this.props.todo;

    return (
      <li
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? 'gray' : 'black'
        }}
      >
        <button onClick={this.props.onToggle}>toggle</button>
        <button onClick={this.props.onDelete}>x</button>
        { todo.text }
      </li>
    )

  }
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  addTodo(todo) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: [...prevTodos, todo]
    })
  }

  toggleTodo(index) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.map((todo, i) => {
        if(index != i) {
          return todo
        } else {
          return {
            text: todo.text,
            done: !todo.done
          }
        }
      })
    });
  }

  deleteTodo(index) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.filter((todo, i) => i != index)
    });
  }

  render () {
    const todos = this.state.todos;

    return (
      <div>
        <ul>
          {todos.map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todo={todo}
                onToggle={ () => {
                  this.toggleTodo(i);
                }}
                onDelete={ () => {
                  this.deleteTodo(i);
                }}
              />
            )
          })}
        </ul>
        <input
          type="text"
          value={ this.state.text }
          onChange={ e => {
            this.setState({
              text: e.target.value
            })
          }}
        />
        <button
          onClick={ () => {
            this.addTodo({text: this.state.text, done: false})
            this.setState({
              text: ''
            })
          }}
        >Add</button>
      </div>
    );
  }
}
