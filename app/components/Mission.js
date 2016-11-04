import React from 'react';
import ReactDOM from 'react-dom';

export default class Mission extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div id="mission">
          <ul>
            <li>
              <div id="footerText">Copyright © 2016 Opulence Inc. All rights reserved.</div></li>
            <div id="unitedStates"><img src="http://images.apple.com/ac/flags/1/images/us/16.png"/></div>
            <li >
              <div>United States</div></li>
          </ul>
        </div>
      )
    }
};
