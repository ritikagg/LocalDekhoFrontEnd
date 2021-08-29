import { message } from "antd";

export const actionRequest = (action) => `${action}_REQUEST`;
export const actionSuccess = (action) => `${action}_SUCCESS`;
export const actionFailed = (action) => `${action}_FAILED`;

export const apiHandler = (prop) => async (dispatch) => {
  try {
    dispatch({
      type: actionRequest(prop.action),
    });

    const result = await prop.handler();

    dispatch({
      type: actionSuccess(prop.action),
      payload: result,
    });
  } catch (e) {
    if (prop.errorHandler) {
      message.error("API Error Occured!");
      console.log(e);
    } else {
        console.log(e);
      // prop.errorHandler(e);
      dispatch({
        type: actionFailed(prop.action),
      });
    }
  }
};

export const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, ms);
  });
