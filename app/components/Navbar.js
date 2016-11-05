import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

export default class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div id='navbarDiv'>
         <nav className="navbar navbar-inverse">
           <div className="container-fluid">
             <div className="navbar-header">
               <a className="navbar-brand" href="#">Opulence</a>
             </div>
             <ul className="nav navbar-nav">
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#"><Link to="/test">Shoelaces</Link></a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#">Cufflinks</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#">Ties</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#">Hats</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
             </ul>

           </div>
         </nav>
        </div>
      )
    }
};
