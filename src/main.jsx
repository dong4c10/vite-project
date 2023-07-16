import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import userSlice from "./redux/userSlice.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import spinnerSlice from "./redux/spinnerSlice.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
let store = configureStore({
  reducer: {
    userSlice: userSlice,
    spinnerSlice,
  },
});
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
// reportWebVitals();