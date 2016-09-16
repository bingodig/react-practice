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
      name: ''
    }
  }
  render() {
    const name = this.state.name;

    return (
      <div>
        <h1>Hello, <Name name={ name } />.</h1>
        <input
          type="text"
          value={ name }
          onChange={ e => {
            this.setState({
              name: e.target.value
            })
          }}
        />
      </div>
    );
  }
}
