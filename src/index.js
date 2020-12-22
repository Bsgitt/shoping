import React from "react";
import ReactDOM from "react-dom";
import "./assets/main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductsContextProvider from "./context/PdContext";
import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsContextProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ProductsContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
