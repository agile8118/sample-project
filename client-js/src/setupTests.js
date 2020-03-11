import React from "react";
import Enzyme, { mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

global.React = React;
global.mount = mount;
global.render = render;
