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
              <li id='homebutton'><a href="#"><Link to="/"><img src="http://vignette1.wikia.nocookie.net/stevenuniversetheoryzone/images/3/30/Diamond_white.png/revision/latest?cb=20160322213914" height="20" width="20"/></Link></a></li>
              <li id='shoelaces'><a href="#"><Link to="/shoelace">Wine Glasses</Link></a></li>
              <li id='perfumes'><a href="#"><Link to="/cufflink">Perfumes</Link></a></li>
              <li id='ties'><a href="#"><Link to="/tie">Ties</Link></a></li>
              <li id='hats'><a href="#"><Link to="/hat">Hats</Link></a></li>
              <li id='cartbutton'><a href="#"><Link to="/"><img src="opulenciaga_images/wine.png" height="20" width="20"/></Link></a></li>
            </ul>
          </div>
        </div>

      )
    }
};
