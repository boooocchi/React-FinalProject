import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  data: null
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
