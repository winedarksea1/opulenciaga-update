import React from 'react';
import ReactDOM from 'react-dom';

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
                 <a className="dropdown-toggle" href="#">oShoelaces</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#">oCufflinks</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#">oTies</a>
                 <ul className="dropdown-menu">
                   <li><a href="#">For His Majesty</a></li>
                   <li><a href="#">For Her Majesty</a></li>
                 </ul>
               </li>
               <li className="dropdown">
                 <a className="dropdown-toggle" href="#">oHats</a>
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
