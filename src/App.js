import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Chapter1 from './chapter1';
import Chapter2 from './chapter2';
import Chapter3 from './chapter3';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">React Practice</a>
            </div>
            <ul className="nav navbar-nav">
              <li><Link to='chap1'>propsとstate</Link></li>
              <li><Link to='chap2'>simple todo</Link></li>
              <li><Link to='chap3'>Todo</Link></li>
            </ul>
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
    return <h1>React Practice</h1>
  }
}

export default class extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={None} />
          <Route path='chap1' component={Chapter1} />
          <Route path='chap2' component={Chapter2} />
          <Route path='chap3' component={Chapter3} />
          <Route path="*" component={None} />
        </Route>
      </Router>
    )
  }
}
