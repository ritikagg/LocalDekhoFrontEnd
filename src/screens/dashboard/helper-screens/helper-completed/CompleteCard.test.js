import CompletedCard from "./atoms/CompletedCard";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

const props = {
  key: 1,
  user_name: "Peter",
  service_name: "Tuition",
  location: "New Delhi",
  mobile: "1234567899",
  request_timeslot: "18/09/2021, 15:23:16",
};

test("render completed card", () => {
  render(<CompletedCard {...props} />);
  const element = screen.getByText(/Tuition/i);
  expect(element).toBeInTheDocument();
});
