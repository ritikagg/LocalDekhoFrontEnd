import { createSlice } from "@reduxjs/toolkit";
// import {
//   addNewHelperService,
//   getHelpersDetails,
// } from "../../services/helperService";
// import { wait } from "../helper";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    allRequest: [
      {
        status: "accepted",
        id: 1,
        helper_id: 1,
        helper_name: "John",
        helper_mobile: "9958936359",
        service_id: 2,
        service_name: "Food Delivery",
        user_id: 1,
        avg_charges: 500,
      },
      {
        status: "scheduled",
        id: 1,
        helper_id: 1,
        helper_name: "John",
        helper_mobile: "9958936359",
        service_id: 2,
        service_name: "Food Delivery",
        user_id: 1,
        avg_charges: 500,
      },
      {
        status: "completed",
        id: 1,
        helper_id: 1,
        helper_name: "John",
        helper_mobile: "9958936359",
        service_id: 2,
        service_name: "Food Delivery",
        user_id: 1,
        avg_charges: 500,
      },
    ],
  },

  reducers: {
    // UPDATE_USER_DETAILS(state, action) {
    //   // console.log(action.payload);
    //   // state = action.payload;
    //   state.allServices = action.payload.allServices;
    //   state.allRequest = action.payload.allRequest;
    //   state.loading = false;
    // },
  },
});

// export const getHelpersDetailsAPI = (helper_id) => {
//   console.log(helper_id);
//   return async (dispatch) => {
//     const getDetails = async () => {
//       await wait(2000);
//       const res = await getHelpersDetails(helper_id);
//       return res;
//     };
//     const res = await getDetails();
//     console.log(res);
//     if (res.success) {
//       dispatch(
//         helperActions.UPDATE_HELPER_DETAILS({
//           allServices: res.allservices,
//           allRequest: res.allrequests,
//         })
//       );
//     }
//   };
// };

// export const addNewHelperServiceAPI = (formData) => {
//   return async () => {
//     const addService = async () => {
//       const res = await addNewHelperService(formData);
//       return res;
//     };
//     const res = await addService();
//     console.log(res);
//   };
// };

export const userActions = userSlice.actions;

export default userSlice;
