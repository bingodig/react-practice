import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const input = require('raw!./text.md')

export default class extends Component {
  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Tips</h2>
        </div>
        <section className="well">
          <ReactMarkdown source={input} />
        </section>
      </div>
    )
  }
}
