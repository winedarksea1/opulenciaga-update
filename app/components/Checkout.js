import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router";

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <div id='container'>
          <div id="signuptext">You are one step closer to becoming Opulent.</div>
            <div class='signup'>
               <form onSubmit = { this.onHandleSignup }>
                 <input name = "firstName" type='text' placeholder='Credit Card:'  />
                 <input name = "lastName" type='text' placeholder='CVV:'  />
                 <input name = "email" type='text' placeholder='Expiration Date:'  />
                 <input name = "password" type='text' placeholder='Billing Address:'  />
                <input name = "password" type='text' placeholder='Shipping Address:'  />
               </form>
            </div>
            <div id="logintext">How opulent are you?</div>
            <div id="login" class='signup'>
               <form onSubmit = { this.onHandleSignIn }>
                 <input name="email" type='text' placeholder='Opulent Promo Code:'  />
                 <Link to="/home"><button type='submit' placeholder='SUBMIT'>Submit Order</button></Link>
               </form>
            </div>

            </div>
        </div>

      )
    }
};
