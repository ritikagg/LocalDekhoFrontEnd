import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/auth-slice";
import reqServcieSlice from "./reqService/reqService-slice";
import themeSlice from "./theme/theme-slice";
import helperSlice from "./helpers/helpers-slice";
import userSlice from "./users/user-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    reqService: reqServcieSlice.reducer,
    helper: helperSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
