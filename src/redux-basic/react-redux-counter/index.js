import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import counterApp from './reducers';
import App from './App';

let store = createStore(counterApp);

const input = require('raw!./text.md')

export default class extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>counter w/ react-redux</h2>
            <Provider store={store}>
              <App />
            </Provider>
          </div>
        </div>

        <section className="well">
          <ReactMarkdown source={input} />
        </section>
      </div>
    )
  }
}
