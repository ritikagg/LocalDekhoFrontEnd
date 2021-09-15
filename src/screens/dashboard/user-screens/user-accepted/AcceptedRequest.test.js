import AcceptedRequest from "./AcceptedRequest";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

const cardProps = {
  props: [
    {
      key: 1,
      helper_name: "John",
      service_name: "Food Delivery",
      mobile: "9306871479",
      charges: 500,
    },
  ],
};
test("render accepted requets user module", () => {
  render(<AcceptedRequest {...cardProps} />);
  const element = screen.getByText(/Food Delivery/i);
  expect(element).toBeInTheDocument();
});
