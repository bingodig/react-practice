import 'babel-polyfill'

import React, { Component } from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'
import ReactMarkdown from 'react-markdown';

const input = require('raw!./text.md')

export default class extends Component {
  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-body">
            <h2>Reddit App</h2>
            <Root />
          </div>
        </div>

        <section className="well">
          <ReactMarkdown source={input} />
        </section>
      </div>
    )
  }
}
