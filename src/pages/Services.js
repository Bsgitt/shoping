import React from 'react'

export default function Services() {
    return (
      <div className="h-screen bg-red-500">
        <div className=" grid grid-cols-2 ">
          <div className=" flex-row-reverse text-2xl rounded shadow-sm overflow-hidden">
            <div className="justify-center">
              <img
                src="https://image.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg"
                alt="services"
              />
            </div>
          </div>
          <div>Join Partner with Us</div>
        </div>
      </div>
    );
}
