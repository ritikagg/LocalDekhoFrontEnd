import ServiceCard from "./atoms/ServiceCard";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

const props = {
  key: 1,
  user_name: "Peter",
  service_name: "Tuition",
  location: "New Delhi",
  mobile: "1234567899",
  charges: "5000",
};

test("render completed card", () => {
  render(<ServiceCard {...props} />);
  const element = screen.getByText(/Tuition/i);
  expect(element).toBeInTheDocument();
});
