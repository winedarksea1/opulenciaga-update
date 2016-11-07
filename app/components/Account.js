import React from 'react';
import ReactDOM from 'react-dom';

export default class Account extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
      return (
        <div>
          <div id='container'>
          <div id="signuptext">Make an account. Become opulent.</div>
            <div class='signup'>
               <form>
                 <input type='text' placeholder='First:'  />
                 <input type='text' placeholder='Last:'  />
                 <input type='text' placeholder='Email:'  />
                 <input type='text' placeholder='Password:'  />
                 <input type='submit' placeholder='signup' />
               </form>
            </div>
            <div id="logintext">Already opulent? Carry on.</div>
            <div id="login" class='signup'>
               <form>
                 <input type='text' placeholder='Email:'  />
                 <input type='text' placeholder='Password:'  />
                 <input type='submit' placeholder='SUBMIT' />
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
