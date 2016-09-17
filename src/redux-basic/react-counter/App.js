import React, { Component } from 'react';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }
  render() {
    const count = this.state.count
    return (
      <div>
        <p>{ this.state.count }</p>
        <button
          onClick={ () => {
            this.setState({
              count: count + 1,
            });
          }}
        >+</button>
      </div>
    );
  }
}
