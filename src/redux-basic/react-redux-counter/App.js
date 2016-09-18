import React, { Component } from 'react';
import { createStore } from 'redux';
import Display from './containers/Display';
import Buttons from './components/Buttons';


export default class extends Component {
  render() {
    return (
      <div>
        <Display />
        <Buttons />
      </div>
    );
  }
}
