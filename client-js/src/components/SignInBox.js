/* 
  This classs based component renders and handles sign in form along with 
  rendering social media connect buttons.
*/

import React, { Component } from "react";

class SignInBox extends Component {
  state = {
    email: "",
    password: ""
  };

  // When the sign in form gets submitted
  onFormSubmit = e => {
    e.preventDefault();

    const email = this.state.email;
    const password = this.state.password;

    // @TODO: Send off the provided credentials to servrer using Ajax
  };

  render() {
    return (
      <div className="signin__box">
        <h3 className="heading-tertiary u-margin-bottom-3">Sign In</h3>
        <img className="signin__icon" src="./icons/lock.svg" />

        {/* Sign in form */}
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="form__group">
            <input
              className="form__input"
              name="email"
              placeholder="Email Address"
              value={this.state.email}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              type="text"
            />
          </div>
          <div className="form__group">
            <input
              className="form__input"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              type="password"
            />
          </div>
          <div className="form__group">
            <button className="btn btn--full">
              Continue <span className="a-3">&rsaquo;</span>
            </button>
          </div>
        </form>

        <div className="a-1">or Connect with Social Media</div>

        {/*
          @TODO: A valid URL needs to be put in the hrefs so that we can continue 
          to authenticate with Facebook or Twitter 
        */}
        <div className="wrapper">
          <div className="form__group">
            <a href="#" className="btn btn--twitter">
              <img className="a-2" src="./icons/twitter.svg" />
              Sign in with Twitter
            </a>
          </div>
          <div className="form__group">
            <a href="#" className="btn btn--facebook">
              <img className="a-2" src="./icons/facebook.svg" />
              Sign in with Facebook
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInBox;
