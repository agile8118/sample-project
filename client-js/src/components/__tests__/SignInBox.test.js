import "../../setupTests";

import SignInBox from "../SignInBox";

let wrapped;
beforeEach(() => {
  wrapped = mount(<SignInBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has 2 inputs, a button and 2 links", () => {
  expect(wrapped.find("input").length).toEqual(2);
  expect(wrapped.find("button").length).toEqual(1);
  expect(wrapped.find("a").length).toEqual(2);
});

describe("the inputs", () => {
  it("has an email and password field that users can type in", () => {
    const emailText = "eamil@company.com";
    const passwordText = "password";

    wrapped
      .find("input")
      .first()
      .simulate("change", {
        target: { value: emailText }
      });

    wrapped
      .find("input")
      .last()
      .simulate("change", {
        target: { value: passwordText }
      });

    wrapped.update();

    expect(
      wrapped
        .find("input")
        .first()
        .prop("value")
    ).toEqual(emailText);
    expect(
      wrapped
        .find("input")
        .last()
        .prop("value")
    ).toEqual(passwordText);
  });
});
