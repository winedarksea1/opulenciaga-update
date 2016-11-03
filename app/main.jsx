'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import { Router, hashHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import {render} from 'react-dom'
import {receiveProducts} from './action-creators/Products';

import store from './store'

const onLoad = function (products) {
  const productsAction = receiveProducts(products);

  store.dispatch(productsAction);
};


const onAppEnter = function (nextRouterState) {

  console.log(nextRouterState);
  fetch('/products')
  .then(res => res.json())
  .then(products => {
    onLoad(products);
  });
};

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={onAppEnter}>


      </Route>
    </Router>
  </Provider>,
  document.getElementById('submain')
)
