import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import loginReducer from "./slice/loginSlice";
import dataReducer from "./slice/dataSlice";
import favoriteReducer from "./slice/favoriteSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//persist
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import config from "@/config";

let middleware = [];
if (import.meta.env.DEV) {
  middleware = [...middleware];
}

const persistConfig = {
  key: config.localStorageKey,
  storage
};

const rootReducer = combineReducers({
  login: loginReducer,
  datas: dataReducer,
  favorites: favoriteReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middleware)
});

const persistor = persistStore(store);

export const AppProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);
