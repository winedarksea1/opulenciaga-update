'use strict';

import React, { Component } from 'react';

import NavbarContainer from '../containers/NavbarContainer';
import ProductsContainer from '../containers/ProductsContainer';
import Carousel from "./Carousel";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <Carousel />
        <Footer />
      </div>
    )
  }
}
