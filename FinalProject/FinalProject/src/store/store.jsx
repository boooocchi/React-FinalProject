import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/loginSlice";
import dataReducer from "./slice/dataSlice";
import favoriteReducer from "./slice/favoriteSlice";

import config from "@/config";

const store = configureStore({
  reducer: {
    login: loginReducer,
    datas: dataReducer,
    favorites: favoriteReducer
  }
});

export default store;
