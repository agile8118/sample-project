import "../../setupTests";

import App from "../App";
import SignInBox from "../SignInBox";
import WelcomeBox from "../WelcomeBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<App />);
});

afterEach(() => {
  wrapped.unmount();
});

it("shows the sing in box", () => {
  expect(wrapped.find(SignInBox).length).toEqual(1);
});

it("shows the welcome box", () => {
  expect(wrapped.find(WelcomeBox).length).toEqual(1);
});
