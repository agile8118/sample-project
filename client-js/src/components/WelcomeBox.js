/* 
  This function based component renders the static welcome box next to the sign in form
*/

import React from "react";

const WelcomeBox = () => {
  return (
    <div className="signin__box">
      <div className="signin__logo">
        <div></div>
        <span>LOGO</span>
      </div>
      <div className="signin__text-box">
        <h2 className="heading-secondary">Welcome Back ,</h2>
        <span>Sign in to continue access pages</span>
      </div>
      <div className="singin__footnote">
        <div></div>
        <span>www.yoursite.com</span>
      </div>
    </div>
  );
};

export default WelcomeBox;
