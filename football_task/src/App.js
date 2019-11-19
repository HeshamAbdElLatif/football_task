import React, { Component, lazy, Suspense } from 'react';
import logo from './logo.svg';
import './assets/style.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import HomePage from './components/home/home'
import Clubs from './components/clubs/clubs'

class App extends Component {
 
  render(){
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/:id" component={Clubs} />
        </Switch>
      </div>
    </Router>
    );
  }
}
export default App;
