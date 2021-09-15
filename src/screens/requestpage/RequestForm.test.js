import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17";
import RequestForm from "./RequestForm";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../../store/index";

// Enzyme.configure({ adapter: new EnzymeAdapter() });

const wrapper = mount(
  <Provider store={store}>
    <RequestForm />
  </Provider>
);

describe("Request Form Test", () => {
  it("renders without errors", () => {
    expect(wrapper.find(".requestService__form_container")).toHaveLength(3);
  });

  // it("resets the input value to defaults when the Clear button has been clicked", () => {
  //   wrapper.find("button.reset").simulate("click");
  //   expect(wrapper.find("input").prop("value")).toBe("Test Value");
  // });
});
