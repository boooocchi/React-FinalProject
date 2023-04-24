import { createSlice } from "@reduxjs/toolkit";

const initialLoginState = {
  user: { email: "", password: "" },
  error: null
};

const loginSlice = createSlice({
  name: "authentication",
  initialState: initialLoginState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    logOut(state) {
      state.user = false;
    }
  }
});

export const { setUser, logOut } = loginSlice.actions;
export default loginSlice.reducer;
