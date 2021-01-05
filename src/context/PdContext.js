import React, { createContext, useState,useEffect } from 'react';

export const ProductsContext = createContext()
const ProductsContextProvider =({children})=>{
    const [data,setData] =useState([])
    useEffect(()=>{
       async function getData() {
         try {
           let url = await fetch("https://fakestoreapi.com/products");
           let response = await url.json();
           setData(response)
         } catch (err) {
           console.log(err);
         }
       }
       getData()
    },[])
   return (
        <ProductsContext.Provider value={{data}}>
                {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider