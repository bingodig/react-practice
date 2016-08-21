import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Chapter1 from './chapter1';

class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link to='chap1'>propsとstate</Link>
        <div>
          { this.props.children }
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
          <Route path="*" component={None} />
        </Route>
      </Router>
    )
  }
}
