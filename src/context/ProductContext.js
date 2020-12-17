import React, { createContext, useState } from "react";

export const ProductsContext = createContext();
const ProductsContextProvider = ({ children }) => {
    //wait fetch api product here
  const [products] = useState();

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
