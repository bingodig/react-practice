import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import ReactMarkdown from 'react-markdown';

import WhatIsReact from './react-basic/what-is-react';
import PropsState from './react-basic/props-state';
import SimpleTodo from './react-basic/simple-todo';
import Todo from './react-intermediate/todo';
import ReactCounter from './redux-basic/react-counter';
import ReduxCounter from './redux-basic/redux-counter';
import ReduxTodo from './redux-intermediate/redux-todo';
import RedditApp from './redux-async/reddit-app';

const input = require('raw!./text.md')

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">React Practice</a>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    react basic<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to='react-basic/what-is-react'>What is React</Link></li>
                    <li><Link to='react-basic/props-state'>props & state</Link></li>
                    <li><Link to='react-basic/simple-todo'>Simple Todo</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    react intermediate<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to='react-intermediate/todo'>Todo</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    redux basic<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to='redux-basic/react-counter'>counter w/o redux</Link></li>
                    <li><Link to='redux-basic/redux-counter'>counter w/ redux</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    redux intermediate<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to='redux-intermediate/redux-todo'>Redux Todo</Link></li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a href='#' className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    redux async<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link to='redux-async/reddit-app'>Reddit App</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

class None extends Component {
  render () {
    return (
      <div>
        <div className="page-header">
          <h2>React Practice</h2>
        </div>
        <section className="well">
          <ReactMarkdown source={input} />
        </section>
      </div>
    )
  }
}

export default class extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={None} />
          <Route path='react-basic/what-is-react' component={WhatIsReact} />
          <Route path='react-basic/props-state' component={PropsState} />
          <Route path='react-basic/simple-todo' component={SimpleTodo} />
          <Route path='react-intermediate/todo' component={Todo} />
          <Route path='redux-basic/react-counter' component={ReactCounter} />
          <Route path='redux-basic/redux-counter' component={ReduxCounter} />
          <Route path='redux-intermediate/redux-todo' component={ReduxTodo} />
          <Route path='redux-async/reddit-app' component={RedditApp} />
          <Route path="*" component={None} />
        </Route>
      </Router>
    )
  }
}
