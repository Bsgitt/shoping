import React from "react";

export default function About() {
  return (
    <>
      <div className="flex justify-center h-screen items-center">
        {/* grid1 */}
        <div className="justify-center grid-cols-2 sm: flex-col">
          <div className=" flex justify-around sm:max-w-md">
            <img
              src="https://image.freepik.com/free-vector/store-with-credit-card-gift-boxes-buyers-illustration_1262-18980.jpg"
              alt="contact"
              className="relative max-w-lg xl:w-full mt-10 rounded-sm shadow-sm sm: w-3/4"
            />
          </div>
          <div className="text-center">
            <div className="text-2xl">About</div>
            <div className="xl:grid grid-cols-1 shadow-sm  text-left mr-10 sm:grid-cols-1">
              It’s fair to say that online shopping has revolutionized retail.
              As ecommerce first took hold, pessimistic prognosticators claimed
              it would be a death knell for retail jobs. The age of shop
              assistants, they argued, was over. That may have proved right to
              an extent, but the idea that ecommerce would harm the job market
              isn’t. You don’t need an in-person shop assistant for each
              purchase, but you do need 1000s of workers behind the scenes.
              They’re who make online shopping work.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
