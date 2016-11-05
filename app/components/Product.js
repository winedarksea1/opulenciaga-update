'use strict';

import React, { Component } from 'react';

import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Product extends Component {

  render() {

    

    return (
      <div>
        <Navbar />

        <Footer />
      </div>
    )
  }
}
