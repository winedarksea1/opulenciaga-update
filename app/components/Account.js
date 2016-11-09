import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup } from '../action-creators/User';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
        this.onHandleSignup = this.onHandleSignup.bind(this);
        this.onHandleSignIn = this.onHandleSignIn.bind(this);

    }
    onHandleSignup(event) {
      event.preventDefault();
      const { signup } = this.props;

      const credentials = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log(credentials);
      signup(credentials);
    }

    onHandleSignIn(event) {
      event.preventDefault();
      const { login } = this.props;

      const credentials = {
        email: event.target.email.value,
        password: event.target.password.value
      };
      console.log(credentials);
      login(credentials);
    }

    render() {
      return (
        <div>
          <div id='container'>
          <div id="signuptext">Make an account. Become opulent.</div>
            <div class='signup'>
               <form onSubmit = { this.onHandleSignup }>
                 <input name = "firstName" type='text' placeholder='First:'  />
                 <input name = "lastName" type='text' placeholder='Last:'  />
                 <input name = "email" type='text' placeholder='Email:'  />
                 <input name = "password" type='text' placeholder='Password:'  />
                 <button type='submit' placeholder='signup'>Sign Up</button>
               </form>
            </div>
            <div id="logintext">Already a member? Carry on being opulent.</div>
            <div id="login" class='signup'>
               <form onSubmit = { this.onHandleSignIn }>
                 <input name="email" type='text' placeholder='Email:'  />
                 <input name="password" type='text' placeholder='Password:'  />
                 <button type='submit' placeholder='SUBMIT'>Sign In</button>
               </form>
            </div>

            </div>
        </div>
      )
    }
};






// <div id='container'>
// <div className='signup'>
// <form>
// <input type='text' placeholder='First:'  />
// <input type='text' placeholder='Last:'  />
// <input type='text' placeholder='Email:'  />
// <input type='text' placeholder='Phone:'  />
// <input type='submit' placeholder='SUBMIT' />
// </form>
// </div>
// <div className='whysign'>
// <h1>Learn by Doing</h1>
// <p>Learning to code is not magic. It is as simply as opening your browser! See in real time the changes you make to HTMl, CSS, JavaScript, HAML, and more!</p>
// <p>Learn:
// <span>HTML</span>
// <span>CSS</span>
// <span>JavaScript</span>
// </p>
// </div>
// </div>





// <div class='whysign'>
// <h1>Learn by Doing</h1>
// <p>Learning to code is not magic. It is as simply as opening your browser! See in real time the changes you make to HTMl, CSS, JavaScript, HAML, and more!</p>
// <p>Learn:
// <span>HTML</span>
// <span>CSS</span>
// <span>JavaScript</span>
// </p>
// </div>
