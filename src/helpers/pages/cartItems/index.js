import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";
const Cart = () => {
  const {
    total,
    cartItems,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);
  console.log(cartItems,'aaaaaaaaaa')

  return (
    <>
      <div>
        <div className="text-lg mt-5 text-center"> Cart</div>
        
        <div className="flex flex-row justify-center">
          <div className="flex flex-col px-3 py-1">
            {cartItems.length > 0 ? (
              <CartProducts />
            ) : (
              <div className="px-3 py-4 text-sm">Your cart is empty</div>
            )}
            {checkout && (
              <div className="p-3 text-center text-green-400">
                {" "}
                Check out successfully
                <button className="border-red-400 rounded-sm">
                  <Link to="/products">BUY MORE</Link>
                </button>
              </div>
            )}
          </div>
          <div className="px-3 py-4 m-5 p-5">
            {cartItems.length > 1 && (
              <div className="max-w-sm rounded overflow-hidden shadow-lg m-5 p-5">
                <div className="text-center">
                  <div className="text-lg mb-1">
                    total items 
                  </div>

                  <div className="text-lg mb-1">total Payment ${total}</div>
                  <div className="flex justify-around">
                    <button
                      className="bg-green-400 px-2 py-1 rounded-md  mb-1 "
                      onClick={handleCheckout}
                    >
                      CHECKOUT
                    </button>
                    <button
                      className="bg-purple-200 rounded-md mb-1 px-2 py-1"
                      onClick={clearCart}
                    >
                      CLEAR{" "}
                    </button>
                    <button>Free Click</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
