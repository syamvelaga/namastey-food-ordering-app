const { render, screen } = require("@testing-library/react");
const { default: ContactUs } = require("../components/ContactUs");

import "@testing-library/jest-dom";

describe("ContactUs Component test Cases", () => {
  test("Should be render Properly", () => {
    render(<ContactUs />);
    //Querying
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should be Loaded the button element", () => {
    render(<ContactUs />);

    //Querying
    const buttonExits = screen.getByText("Submit");

    //Assertion

    expect(buttonExits).toBeInTheDocument();
  });

  test("Should be Loaded 2 input elements", () => {
    render(<ContactUs />);
    //Querying
    const inputElementsExits = screen.getAllByRole("textbox");
    //Assertion
    expect(inputElementsExits.length).toBe(2);
  });
});
