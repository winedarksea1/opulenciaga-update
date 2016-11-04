import React from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div id="footer">
          <div id="footerText">
            <div className="col-md-10">Copyright © 2016 Opulence Inc. All rights reserved.</div>
            <div className="col-md-2" id="unitedStates">
              <ul>
                <li>
                  <img src="http://images.apple.com/ac/flags/1/images/us/16.png"/></li>
                <li>
                  <div>United States</div></li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
};
