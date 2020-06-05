import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './recruits/Dashboard';
import Alerts from './layout/Alerts';
import Login from './useraccounts/Login';
import Register from './useraccounts/Register';
import PrivateRoute from './shared/PrivateRoute';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';

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
              <Header />
              <Alerts />
                <div className="container">
                  <Switch>
                    <PrivateRoute exact path='/' component={Dashboard} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
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