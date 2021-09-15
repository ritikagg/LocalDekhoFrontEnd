import { createSlice } from "@reduxjs/toolkit";
import { AddressDetailsAPI } from "../../services/addessline";

const reqServcieSlice = createSlice({
  name: "reqService",
  initialState: {
    location: "",
    name: undefined,
    requestedService: undefined,
    service_id: null,
    datetimeSlot: "",
    latitude: null,
    longitude: null,
    postal_code: null,
    loading: true,
    mobile: undefined,
  },
  reducers: {
    UPDATE_DETAILS(state, action) {
      state.location = action.payload.location;
      state.name = action.payload.name;
      state.requestedService = action.payload.requestedService;
      state.datetimeSlot = action.payload.datetimeSlot;
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.mobile = action.payload.mobile;
      state.service_id = action.payload.service_id;
    },
    UPDATE_LOCATION(state, action) {
      state.location = action.payload.location;
      state.postal_code = action.payload.postal_code;
      state.loading = false;
    },
    UPDATE_LATLNG(state, action) {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
  },
});

export const getAddressLine = (lat, lng) => {
  return async (dispatch) => {
    const addesslinehandler = async () => {
      const res = await AddressDetailsAPI(lat, lng);
      return res;
    };

    const { addressLine, postal_code } = await addesslinehandler();
    dispatch(
      reqServiceActions.UPDATE_LOCATION({
        location: addressLine,
        postal_code: postal_code,
      })
    );
  };
};

export const reqServiceActions = reqServcieSlice.actions;

export default reqServcieSlice;
