import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

test("renders navlist inside layout", () => {
  render(<Layout />, {wrapper: BrowserRouter});
  const linkElement = screen.getByTestId(/navlist/i);
  expect(linkElement).toBeInTheDocument();
});

test('navigates to contacts route', async () => {
  render(<Layout />, {wrapper: BrowserRouter})
  const user = userEvent.setup();

  expect(screen.getByText(/Contacts/i)).toBeInTheDocument()
  await user.click(screen.getByText(/Contacts/i))
  expect(screen.getByText(/Contacts/i)).toBeInTheDocument()
})