import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItems from "./CartItems";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  console.log("cartItems", cartItems);
  return (
    <>
      <div className='xl:container mx-auto md: container max-w-sm'>
          {cartItems.map((product)=> <CartItems key={product.id} product={product}/>)}
      </div>
    </>
  );
};

export default Cart;
