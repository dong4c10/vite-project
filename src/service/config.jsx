import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import spinnerSlice, { batLoading, tatLoading } from "../redux/spinnerSlice";
let store = configureStore({
  reducer: {
    // userSlice: userSlice,
    spinnerSlice: spinnerSlice,
  },
});

export let https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  // timeout: 1000,
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NCIsIkhldEhhblN0cmluZyI6IjA5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjA4MDAwMDAwMCIsIm5iZiI6MTY3MjQxOTYwMCwiZXhwIjoxNzAyMjI3NjAwfQ.P5fJSMdFWDXkAXi_Hm7kZhuXoxo6xtTzIno_q6kp38I",
  },
});

//axios interceptor
// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("đi");
    store.dispatch(batLoading());
    return config;
    //bat loading
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("về");
    //tat loading
    store.dispatch(tatLoading());

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
    store.dispatch(tatLoading());
    console.log("về");
    //tat loading
  }
);
