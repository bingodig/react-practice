import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const todo = this.props.todo;

    return (
      <li
        style={{
          textDecoration: todo.done ? 'line-through' : 'none',
          color: todo.done ? 'gray' : 'black',
        }}
      >
        <button onClick={this.props.onToggle}>toggle</button>
        <button onClick={this.props.onDelete}>x</button>
        { todo.text }
      </li>
    );
  }
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      todos: [],
    }

    this._addTodo = this._addTodo.bind(this);
    this._toggleTodo = this._toggleTodo.bind(this);
    this._deleteTodo = this._deleteTodo.bind(this);
  }

  _addTodo(todo) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: [
        ...prevTodos,
        todo
      ]
    })
  }

  _toggleTodo(index) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.map((todo, i) => {
        if(index !== i) {
          return todo
        } else {
          return {
            ...todo,
            done: !todo.done
          };
        }
      })
    });
  }

  _deleteTodo(index) {
    const prevTodos = this.state.todos;

    this.setState({
      todos: prevTodos.filter((todo, i) => i !== index)
    })
  }

  render() {
    const todos = this.state.todos;

    return (
      <div>
        <ul>
          { todos.map((todo, i) => {
            return (
              <TodoItem
                key={i}
                todo={todo}
                onToggle={() => {
                  this._toggleTodo(i);
                }}
                onDelete={() => {
                  this._deleteTodo(i);
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
          onClick={() => {
            this._addTodo({text: this.state.text, done: false})
            this.setState({
              text: '',
            })
          }}
        >Add</button>
      </div>
    );
  }
}
