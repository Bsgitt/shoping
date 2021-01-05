import React, { useContext, useState} from 'react'
import { ProductsContext } from '../context/PdContext'
import ProductItems from './ProductItems'

const Products = () => {
    const [isLoading] =useState(false)
    const {data} =useContext(ProductsContext)
   
  return (
    <>
    {!isLoading && data.length ===0 && <h1 className='text-6xl text-center mx-auto mt-32'>Loading...</h1>}
    {isLoading ?(<h1 className='text-6xl text-center mx-auto mt-32'>NO Products</h1>):(
      <div className='xl:grid grid-cols-3 sm:grid gap-0 md: grid-rows-2 '>
        {data.map((product) =>(
        <ProductItems key={product.id} product={product}/>
      ))}
      </div>
    )}
    
    </>
  )
}

export default Products
