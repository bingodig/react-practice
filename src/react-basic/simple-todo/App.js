import React, { Component } from 'react';

class Name extends Component {
  render() {
    const name = this.props.name;

    return <span>{ name } </span>
  }
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      todos: []
    };
  }
  render() {
    const todos = this.state.todos;

    return (
      <div>
        <h3>Task List</h3>
        <ul>
          {todos.map((todo, i) => {
            return (
              <li key={i}>{ todo }</li>
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
            const prevTodos = this.state.todos;

            this.setState({
              todos: [
                ...prevTodos,
                this.state.text,
              ]
            })

            this.setState({
              text: '',
            })
          }}
        >Add</button>
      </div>
    );
  }
}
