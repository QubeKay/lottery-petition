import { render, screen } from "@testing-library/react";
import { Home } from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders translate button", () => {
    render(<Home t={key => key} />);

    const heading = screen.getByTestId("translate-button");

    expect(heading).toBeInTheDocument();
  });
});
