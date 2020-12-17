import React,{useState, useEffect} from 'react'
import Navbar from './components/Navbar'
import ProductsCard from './components/ProductsCard'

function App() {
const[cart ,setCart] =useState([])
const [products,setProducts]=useState([])
const [isLoading ,setIsLoading]=useState(true)


useEffect(()=>{
    fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json())
    .then(data =>{
      setProducts(data)
      setIsLoading(false)
    },[])
    .catch(err=> console.log(err))
})
  return (
    <>
      <Navbar/>
    <div className='container mx-auto' >
      {!isLoading && products.length ===0 && <h1 className="text-6xl text-center mx-auto mt-32">NO Product Fonnd</h1>}
    {isLoading ? (<h1 className="text-6xl text-center mx-auto mt-32">Load...</h1>):( <div className="grid grid-cols-3 gap-4 mt-10">
         {products.map((product)=>(
    <ProductsCard key={product.id} product={product}/>
         ))}
        </div>)}
    </div>
    </>
  );
}

export default App;
