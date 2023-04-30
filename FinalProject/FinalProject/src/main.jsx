import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/AppRoute.jsx";
import "./index.css";

import { AppProvider } from "./store/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <AppRoute />
  </AppProvider>
);
