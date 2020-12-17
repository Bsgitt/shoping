import React from 'react'
import {Link} from 'react-router-dom'
import { FaSpeakap } from "react-icons/fa";


const Navbar = () => {
  return (
    <>
   
  <nav className="font-sans flex flex-col text-center text-gray-50 sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-red-500 shadow sm:items-baseline w-full">
  <div className="mb-2 sm:mb-0">
    <Link to="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark flex justify-self-start">
        <FaSpeakap className='mx-auto' />
        Shoppify
        </Link>
  </div>
  <div className='flex mr-10'>
    <Link to="/cart" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Cart</Link>
    <Link to="/profile" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Profile</Link>
    <Link to="/Payment" className="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Payment</Link>
  </div>
</nav>

    </>
  )
}

export default Navbar
