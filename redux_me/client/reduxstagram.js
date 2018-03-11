// let's go!
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store, { history } from './store';
import { Provider } from 'react-redux';

import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import css from './styles/style.styl';

const router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:post_id" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('root'));
