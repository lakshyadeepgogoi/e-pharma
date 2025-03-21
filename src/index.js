import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducer";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import ContextProvider from "./Context/ContextProvider";

const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Provider store={store}>
        <ContextProvider>
          <BrowserRouter>
            <App />
            <Toaster />
          </BrowserRouter>
        </ContextProvider>
      </Provider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
