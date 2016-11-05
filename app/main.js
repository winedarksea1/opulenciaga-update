'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import { Router, hashHistory, Route, IndexRoute, IndexRedirect } from 'react-router';
import {render} from 'react-dom'
import {receiveProducts} from './action-creators/Products';
import CategoryContainer from "./containers/CategoryContainer";
import Carousel from "./components/Carousel";
import ProductsContainer from "./containers/ProductsContainer";
import ProductContainer from "./containers/ProductContainer";
import { getCategory } from "./action-creators/Category";
import { getProductById } from "./action-creators/Product";

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

const onCategoryEnter = function (nextRouterState) {
 const categoryType = nextRouterState.params.category;
 fetch(`/products/${categoryType}`)
   .then(products => {
       const thunk = getCategory(categoryType);
       store.dispatch(thunk);
   })

}

const onProductEnter = function (nextRouterState) {
console.log("nextRouterState: ", nextRouterState)
 const categoryType = nextRouterState.params.category;
 const productId = nextRouterState.params.productId;
 fetch(`/products/${categoryType}/${productId}`)
   .then(product => {
       const thunk = getProductById(categoryType, productId);
       store.dispatch(thunk);
   })

}

render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Home}>
        <IndexRedirect to="/home"/>
        <Route path="/home" component={Carousel}/>
        <Route path="/:category" component={CategoryContainer} onEnter={onCategoryEnter}/>
        <Route path="/:category/:productId" component={ProductContainer} onEnter={onProductEnter}/>

      </Route>
    </Router>
  </Provider>,
  document.getElementById('submain')
)




// <Route path="/:categoryId" component = {CategoryContainer}/>
//
//
//
