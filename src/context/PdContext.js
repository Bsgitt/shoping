import React, { createContext, useState,useEffect } from 'react';
import getData  from './FectData';
export const ProductsContext = createContext()
const ProductsContextProvider =({children})=>{
    const [data,setData] =useState([])
    useEffect(()=>{
        getData().then(res =>{
            setData(res)
            // console.log(res)
        }).catch((err)=> console.log(err))
    },[])
   return (
        <ProductsContext.Provider value={{data}}>
                {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider