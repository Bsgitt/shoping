import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { formatNumber } from "../../helpers/utils";

const CartItem = ({ product }) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <div className="flex justify-between rounded-md bg-white shadow-lg px-1 py-2 mb-1 mt-2 md:justify-center md:text-sm sm:text-sm">
      <div className="sm:text-sm flex-col gap-0 lg:flex-col flex-1">
        <img
          alt={product.name}
         
          src={product.image}
          className="w-10 block lg:relative max-w-sm md:flex-1 "
        />
      </div>
      <div className=" relative col-sm-4 p-2 md:grid-cols-1">
        <h5 className="mb-1">{product.name}</h5>
        <p className="mb-1">Price: {formatNumber(product.price)} </p>
      </div>
      <div className="col-sm-2 p-2 text-center ">
        <p className="mb-0">Qty: {product.quantity}</p>
      </div>
      <div className="col-sm-4 p-2 text-right">
        <button
          onClick={() => increase(product)}
          className="bg-red-500 hover:bg-red-300 text-sm px-3 py-4 rounded ml-1 md:flex-col"
        >
          +
        </button>

        {product.quantity > 1 && (
          <button
            onClick={() => decrease(product)}
            className="bg-yellow-500 hover:bg-yellow-400 text-sm px-3 py-4 rounded ml-1"
          >
            -
          </button>
        )}

        {product.quantity <= 1 && (
          <button
            onClick={() => removeProduct(product)}
            className="bg-gray-100 rounded ml-1 hover:bg-white text-sm px-3 py-4"
          >
            REMOVE
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
