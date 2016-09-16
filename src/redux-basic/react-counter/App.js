import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }
  render() {
    return (
      <div>
        <p>{ this.state.count }</p>
        <button
          onClick={ e => {
            e.preventDefault();
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >+</button>
      </div>
    );
  }
}
