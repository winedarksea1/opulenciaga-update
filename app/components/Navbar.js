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
              <li><img src="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjgptD_35LQAhUq64MKHYYXCtQQjRwIBw&url=http%3A%2F%2Fwww.logospike.com%2Flogo-image-1704%2F&psig=AFQjCNEIiQK_aWiMpqNHAmkSD7J9LX3J_A&ust=1478474270444558"/></li>
              <li id='shoelaces'><a href="#"><Link to="/shoelace">Shoelaces</Link></a></li>
              <li id='perfumes'><a href="#"><Link to="/cufflink">Perfumes</Link></a></li>
              <li id='ties'><a href="#"><Link to="/tie">Ties</Link></a></li>
              <li id='hats'><a href="#"><Link to="/hat">Hats</Link></a></li>
            </ul>
          </div>
        </div>

      )
    }
};
