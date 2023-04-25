import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteState = {
  favoritesId: []
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialFavoriteState,
  reducers: {
    setFavoriteId(state, action) {
      state.favoritesId.push(action.payload);
    },
    removeFavoriteId(state, action) {
      state.favoritesId = state.favoritesId.filter((id) => {
        return id !== action.payload;
      });
    }
  }
});

export const { setFavoriteId, removeFavoriteId } = favoriteSlice.actions;
export default favoriteSlice.reducer;
