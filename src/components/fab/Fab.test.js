import Fab from "./Fab";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

test("render hero banner", () => {
  render(<Fab />);
  const element = screen.getByText(/Add New Service/i);
  expect(element).toBeInTheDocument();
});
