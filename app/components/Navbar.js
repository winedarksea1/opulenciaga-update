import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div id="navbar">
          <div id="navbarButtons">
            <ul>
              <li id='homebutton'><a href="#"><Link to="/"><img src="opulenciaga_images/olderDiamond.png" height="25" width="25"/></Link></a></li>
              <li id='shoelaces'><a href="#"><Link to="/shoelace">Wine Glasses</Link></a></li>
              <li id='perfumes'><a href="#"><Link to="/cufflink">Perfumes</Link></a></li>
              <li id='ties'><a href="#"><Link to="/tie">Ties</Link></a></li>
              <li id='hats'><a href="#"><Link to="/hat">Hats</Link></a></li>
              <li id='cartbutton'><a href="#"><Link to="/cart"><img src="http://www.ishop2support.com/images/white-cart.png" height="20" width="20"/></Link></a></li>
              <li id='accountbutton'><a href="#"><Link to="/account"><img src="https://cdn.shopify.com/s/files/1/0345/0689/files/account-icon-bar_new-min.png?46406" height="25" width="25"/></Link></a></li>
            </ul>
          </div>
        </div>

      )
    }
};
