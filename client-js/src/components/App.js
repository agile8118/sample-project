import React from "react";
import SignInBox from "./SignInBox.js";
import WelcomeBox from "./WelcomeBox.js";

export default () => {
  return (
    <div className="signin">
      <WelcomeBox />
      <SignInBox />
    </div>
  );
};
