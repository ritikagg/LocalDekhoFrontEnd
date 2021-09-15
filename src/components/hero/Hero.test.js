import Hero from "./Hero";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

test("render hero banner", () => {
  render(<Hero />);
  const element = screen.getByText(
    /Find a trusted professional for your home needs/i
  );
  expect(element).toBeInTheDocument();
});
