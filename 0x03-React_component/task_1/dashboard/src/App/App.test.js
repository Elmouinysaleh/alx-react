import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow } from "enzyme";

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);

    expect(component.containsMatchingElement(<Notifications />)).toEqual(true);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Login />)).toBe(true); // Changed to true to match the expected behavior
  });

  it("should render Footer component", () => {
    const component = shallow(<App />);

    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render courselist if logged out", () => {
    const component = shallow(<App />);

    component.setProps({ isLoggedIn: false }); // Changed 'isLogedIn' to 'isLoggedIn'

    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders courselist if logged in", () => {
    const component = shallow(<App isLoggedIn={true} />);

    expect(component.containsMatchingElement(<CourseList />)).toEqual(true); // Changed to true to match the expected behavior
    expect(component.contains(<Login />)).toBe(false);
  });

  // New test for keydown event
  it("calls logOut function and displays alert when Ctrl + h keys are pressed", () => {
    const logOutMock = jest.fn();
    const component = shallow(<App logOut={logOutMock} />);
    const instance = component.instance(); // Accessing the instance of the component

    // Simulating keydown event with Ctrl and h keys
    instance.handleKeyDown({ key: "h", ctrlKey: true });

    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logOutMock).toHaveBeenCalled();
  });
});
