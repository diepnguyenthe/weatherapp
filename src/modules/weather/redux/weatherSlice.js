import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  weather: null,
  isLoading: false,
  error: "",
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    weatherFetchAction: (state) => {
      state.isLoading = true;
    },
    weatherFetchSuccess: (state, action) => {
      state.isLoading = false;
      state.weather = action.payload;
      state.error = "";
    },
    weatherFetchError: (state) => {
      state.error = "Fail to fetch data";
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
