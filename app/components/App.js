'use strict';

import React, { Component } from 'react';

import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';


export default class App extends Component {

  render() {
    return (
      <div>
        <ProductsContainer />
      </div>
    )
  }
}
