import { render, screen } from "@testing-library/react";
import Contacts from "./Contacts";

test("renders title using text search", () => {
  render(<Contacts />);
  const linkElement = screen.getByText(/Contacts/i);
  expect(linkElement).toBeInTheDocument();
});
