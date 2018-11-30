import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import reduxThunk from 'redux-thunk';

import books from './reducers/books';
import currentBook from './reducers/book';
import loginStatus from './reducers/login';

import Home from './components/home';
import Login from './components/login';
import Books from './components/books';

import '../assets/stylesheets/application.scss';

const reducers = combineReducers({
  books,
  currentBook,
  loginStatus
});

const middlewares = applyMiddleware(reduxThunk, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/books" component={Books}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
