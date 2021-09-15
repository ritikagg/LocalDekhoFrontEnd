import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Allservices from "./Allservices";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

test("render all service landing page", () => {
  render(<Allservices />);
  const element = screen.getByText(/Electrician/i);
  expect(element).toBeInTheDocument();
});
