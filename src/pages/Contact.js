import React from "react";

export default function Contact() {
  return (
    <div className="h-screen">
      {/* grid1 */}
      <div className="justify-center grid grid-cols-2">
        <div className=" flex justify-around">
          <img
            src="https://image.freepik.com/free-vector/business-man-shaking-hands-signed-contract_3446-646.jpg"
            alt="contact"
            className="relative w-8/12 rounded-sm shadow-sm"
          />
        </div>
        <div className="text-center">
          <div className="text-8xl">Contact</div>
          <div className="text-lg"></div>
        </div>
      </div>
    </div>
  );
}
