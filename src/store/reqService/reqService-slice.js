import { createSlice } from "@reduxjs/toolkit";
// import Api from "../../services/addessline/index";

const reqServcieSlice = createSlice({
  name: "reqService",
  initialState: {
    location: "",
    requestedService: "",
    datetimeSlot: "",
    latitude: null,
    longitude: null,
  },
  reducers: {
    UPDATE_DETAILS(state, action) {
      console.log(action.payload);
      // state = action.payload;
      state.location = action.payload.location;
      state.requestedService = action.payload.requestedService;
      state.datetimeSlot = action.payload.datetimeSlot;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    UPDATE_LOCATION(state, action) {
      console.log(action.payload);
      // state = action.payload;
      state.location = action.payload.location;
    },
    UPDATE_LATLNG(state, action) {
      // console.log(action.payload);
      // state = action.payload;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const getAddressLine = (lat, lng) => {
  return async (dispatch) => {
    const addesslinehandler = async () => {
      const res = "New Delhi"; //await Api.getAddress(lat, lng);
      return res;
    };
    const addressline = await addesslinehandler();
    dispatch(
      reqServiceActions.UPDATE_LOCATION({
        location: addressline,
      })
    );
  };
};

export const reqServiceActions = reqServcieSlice.actions;

export default reqServcieSlice;
