
import React from 'react';
import { login, signup } from '../redux/auth';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    const { message, login, signup } = this.props;
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    }
  }

  render() {
    const { message } = this.props;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input
                  name="firstName"
                  className="form-control"
                  required
                />
            </div>
             <div className="form-group">
                <label>Last Name</label>
                <input
                  name="lastName"
                  className="form-control"
                  required
                />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  required
                />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  placeholder = "Please type password again"
                  required
                />
            </div>
            <button type="submit" className="btn btn-block btn-primary">{message}</button>
        </form>
      </div>
        <div >
          <p>
            <a target="_self"
               className="btn btn-social btn-google">
            <i className="fa fa-google"></i>
            <span>{message} with Google</span>
            </a>
          </p>
        </div>
    );
  }

}