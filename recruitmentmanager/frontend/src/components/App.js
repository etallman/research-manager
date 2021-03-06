import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Navbar from './layout/Navbar';
import Dashboard from './layout/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './shared/PrivateRoute';
import Recruits from './recruits/Recruits';
import Form from './recruits/Form';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

import './App.css'
const alertOptions = {
  timeout: 3000,
  position: 'top center'
};

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

    render() {
      return (
        <Provider store={store}>
          <AlertProvider template={AlertTemplate} {...alertOptions}>
            <Router>
            <Fragment>
              <Navbar />
              <Alerts />
                <div>
                  <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/recruits' component={Recruits}/>
                    <Route exact path='/recruits/form' component={Form}/>
                  </Switch>
              </div>
          </Fragment>
          </Router>
          </AlertProvider>
        </Provider>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));