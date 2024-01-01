import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ProductManager from "./product-manager/ProductManager";
import CountryManager from "./country-manager/CountryManager";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //for development mode
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <ProductManager />
  <CountryManager />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
