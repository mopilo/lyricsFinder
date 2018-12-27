import React, { Component, Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import { NavBar } from './components/layouts/NavBar';
import { Index } from './components/layouts/Index';
import {Provider} from './context'
class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <Fragment>
            <NavBar/>
            <div className='container'>
              <Switch>
                <Route  exact path='/' component={Index}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
