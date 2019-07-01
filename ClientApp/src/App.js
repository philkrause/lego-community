import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import FrontPage from './pages/Frontpage'
import AddQuestion from './pages/AddQuestionPage'
import AnswerQuestion from './pages/AnswerQuestionPage'


export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <>

        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={FrontPage} />
            <Route path='/addquestion' exact component={AddQuestion} />
            <Route path='/answerquestion/:id' exact component={AnswerQuestion} />
          </Switch>
        </Router>
      </>
    );
  }
}
