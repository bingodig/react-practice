import React, { Component } from 'react';
import { createStore } from 'redux';
import expect from 'expect';

function counter(count=0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return count + 1;

    default:
      return count
  }
}

expect(counter(0, {type: 'INCREMENT'})).toBe(1);

const store = createStore(counter)

export default class extends Component {
  componentWillMount() {
    this.unsubscribe = store.subscribe(this.forceUpdate.bind(this))
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const count = store.getState();

    return (
      <div>
        <p>{ count }</p>
        <button
          onClick={ e => {
            e.preventDefault();
            store.dispatch({type: 'INCREMENT'})
          }}
        >+</button>
      </div>
    );
  }
}
