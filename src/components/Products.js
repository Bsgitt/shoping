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
      <div className='grid grid-cols-4 gap-6'>
        {data.map((product) =>(
        <ProductItems key={product.id} product={product}/>
      ))}
      </div>
    )}
    
    </>
  )
}

export default Products
