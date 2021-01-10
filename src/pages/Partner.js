import React, { useState } from "react";

function Partner(props) {

  return (
    <div className="h-screen">
      {/* grid1 */}
      <div className="justify-center grid grid-cols-2">
        <div className=" flex justify-center text-2xl w-auto overflow-hidden shadow-lg mt-5 ml-1 ">
          <img
            src="https://image.freepik.com/free-vector/two-business-partners-shaking-hands-big-briefcase-partnership-agreement-cooperation-deal-completed-concept-white-background_335657-1643.jpg"
            alt="partner"
          />
        </div>
        <div className=" flex justify-center">
          
          <div className="text-2xl text-black">Join Partner with Us</div>

          <div className="text-center bg-red-500">
            <form className="grid grid-rows-4">
              <label htmlFor='name'>Name</label>
              <input type="text" />
              <label htmlFor='email'>Email</label>
              <input type="text" />
              <label htmlFor='number'>Number</label>
              <input type="text" />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
