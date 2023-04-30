import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteState = {
  favoritesId: []
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: initialFavoriteState,
  reducers: {
    setFavoriteId(state, action) {
      state.favoritesId = action.payload;
    },
    addFavoriteId(state, action) {
      state.favoritesId.push(action.payload);
    },
    removeFavoriteId(state, action) {
      state.favoritesId = state.favoritesId.filter((data) => {
        return data.id !== action.payload;
      });
    }
  }
});

export const { addFavoriteId, removeFavoriteId, setFavoriteId } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
