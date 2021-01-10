import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CartProducts from "./CartProducts";
const Cart = () => {
  const {
    itemCount,
    total,
    cartItems,
    clearCart,
    checkout,
    handleCheckout,
  } = useContext(CartContext);
  return (
    <>
      <div className=" h-screen xl:flex-row md:flex justify-around">
        <div className="text-2xl mt-5 text-center ">
          {" "}
          Cart
          <div>
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
          </div>
        </div>

        <div className="flex justify-center items-center px-3 py-4 m-5 p-5 ">
          {cartItems.length > 0 && (
            <div className="xl:flex max-w-md rounded overflow-hidden shadow-lg m-5 p-5 lg:flex col-span-3 gap-3 md:max-w-md md:text-sm sm:text-sm sm:flex justify-center object-cover">
              <div className="text-center">
                <div className="text-lg mb-1">total items {itemCount}</div>

                <div className="text-lg mb-1">total Payment ${total}</div>

                <div className="xl:flex justify-around m-2 mr-1 ml-1 md: flex-row md:text-sm md:m-0.5 ">
                  <button
                    className="bg-black text-white mr-1 ml-1  rounded-md  mb-1 px-2 py-1 "
                    onClick={handleCheckout}
                  >
                    CHECKOUT
                  </button>
                  <button
                    className="bg-gray-200 rounded-md mb-1 mr-1 ml-1 px-2 py-1"
                    onClick={clearCart}
                  >
                    CLEAR{" "}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
