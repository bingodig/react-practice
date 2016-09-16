import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import App from './App';

const input = require('raw!./text.md')

export default class extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>PropsとState</h2>
            <App />
          </div>
        </div>

        <section className="well">
          <ReactMarkdown source={input} />
        </section>
      </div>
    )
  }
}
