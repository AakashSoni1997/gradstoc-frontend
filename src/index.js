import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import store from "../src/redux/store";

import { createRoot } from "react-dom/client";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
