import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductItems = ({ product }) => {
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const addInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };
  return (
    <>
      <div className="xl:max-w-sm rounded overflow-hidden shadow-lg lg: max-w-lg grid-cols-1">
        <div className="md:flex justify-center md:flex-shrink-0">
          <img
            src={product.image}
            alt=""
            className="w-32 h-32 py-3 px-4 flex justify-center items-center"
          />
        </div>

        <div className="px-6 py-2">
          <div className="font-bold text-pink-500 text-lg  mb-2 md:text-sm  ">
            {product.title}
          </div>
          <div className="xl:px-6 py-4 text-sm lg:text-center md:text-center sm:text-center">
            <ul>
              <li>
                <strong>id{product.id}</strong>
              </li>
              <li>
                <strong className="lg:text-center md:text-center sm:text-center">
                  catagory{product.category}
                </strong>
              </li>

              <li>
                <strong className="lg:text-center md:text-center sm:text-center">
                  price ${product.price}
                </strong>
              </li>
            </ul>
          </div>

          <div className="flex justify-end">
            {addInCart(product) && (
              <button
                className="bg-red-600 hover:bg-red-500 border-red-400 hover:border-red-800 rounded px-4 py-2 text-white "
                onClick={() => increase(product)}
              >
                Add More
              </button>
            )}
            {!addInCart(product) && (
              <button
                className="bg-red-600 hover:bg-red-500 border-red-400 hover:border-red-800 rounded px-4 py-2 text-white "
                onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItems;
