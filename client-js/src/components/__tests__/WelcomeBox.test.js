import "../../setupTests";

import WelcomeBox from "../WelcomeBox";

it("shows the right link of the website", () => {
  const wrapped = mount(<WelcomeBox />);
  expect(wrapped.render().text()).toContain("www.yoursite.com");
});
