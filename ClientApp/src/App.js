import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Header from './components/Header'
import FrontPage from './pages/Frontpage'

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/counter' component={Counter} />
            <Route path='/fetch-data' component={FetchData} />
          </Switch>
        </Router>
      </>
    );
  }
}
