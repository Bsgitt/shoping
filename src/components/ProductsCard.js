import React,{useState} from "react";

const ProductsCard = ({ product }) => {
    const [cart ,setCart] =useState(product)
  const addToCard = (id) => {
      setCart({...cart,product})
      console.log('Add Cart',cart.id)
  };
  return (
    <>
    
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
     
        <img
          src={product.image}
          alt=""
          className="w-32 h-32 py-3 px-4 items-center"
        />
        <div className="px-2 py-2 fl  ">
          <div className="font-bold text-pink-500 text-sm mb-2">
            {product.title}
          </div>
          <ul>
            <li>
              <strong>id{product.id}</strong>
            </li>
            <li>
              <strong>catagory{product.category}</strong>
            </li>

            <li>
              <strong>price ${product.price}</strong>
            </li>
          </ul>
          <div className="flex justify-end">
            <button
              className="bg-red-600 hover:bg-red-500 border-red-400 hover:border-red-800 rounded px-4 py-2 text-white "
              onClick={() => addToCard()}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
