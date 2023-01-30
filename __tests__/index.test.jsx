import { render, screen } from "@testing-library/react";
import { Home } from "../pages/index";
import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Home", () => {
  
  it("renders homepage unchanged", () => {
    const { container } = render(<Home t={(key) => key} />);
    expect(container).toMatchSnapshot();
  });

  it("renders translate button", () => {
    render(<Home t={key => key} />);

    const heading = screen.getByTestId("sign-petition-button");

    expect(heading).toBeInTheDocument();
  });
});
