import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

test("renders title using data-testid search", () => {
  render(<Contact />);
  const linkElement = screen.getByTestId('contact-1')
  expect(linkElement).toBeInTheDocument();
});
