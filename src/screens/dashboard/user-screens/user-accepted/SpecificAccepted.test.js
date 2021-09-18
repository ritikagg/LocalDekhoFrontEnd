import AcceptedServiceCard from "./atoms/AcceptedServiceCard";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

import * as redux from "react-redux";
describe("dispatch mock", function () {
  it("should mock dispatch", function () {
    //arrange
    const useDispatchSpy = jest.spyOn(redux, "useDispatch");
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);

    //action
    render(<AcceptedServiceCard {...props} />);
    const element = screen.getByText(/Tuition/i);
    expect(element).toBeInTheDocument();

    //teardown
    useDispatchSpy.mockClear();
  });
});

const props = {
  key: 1,
  user_name: "Peter",
  service_name: "Tuition",
  location: "New Delhi",
  mobile: "1234567899",
  request_timeslot: "18/09/2021, 15:23:16",
};
