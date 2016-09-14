import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import ReactMarkdown from 'react-markdown';

let store = createStore(todoApp)
const input = require('raw!./text.md')

export default class extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>Redux Todo</h2>
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
