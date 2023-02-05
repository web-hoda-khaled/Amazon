import Image from 'next/image'
import React from 'react'
const Header = () => {
  return (
   <>
    <header>
     {/* top nav */}
     <div className='flex items-center bg-amazon_blue px-3 py-2 flex-grow'>
        <div className='mt-2 mr-5 flex items-center flex-grow sm:flex-grow-0'>
        <Image
        src="https://links.papareact.com/f90"
        alt="Amazon"
        width={150}
        height={40}
        opjectFit="contain"
        className='cursor-pointer'
      />
        </div>

        {/* search  input */}
        <div className=' hidden sm:flex items-center h-10 flex-grow rounded-md cursor-pointer bg-yellow-400 hover:bg-yellow-500'>
         <input type="text" className='p-2 focus:outline-none h-full flex-grow flex-shrink  rounded-l-md mr-3' />

         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-14 mr-3">
  <path strokeLinecap="round" strokeLinejoin="round" className='' d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </div>

        {/* right section */}
        <div className='text-white flex aligns-center text-xs space-x-6 mx-6 whitespace-nowrap'>
         <div className=' link'>
          <p>Hello Hoda Khaled</p>
          <p className='font-extrabold md:text-sm'>Acount & list</p>
         </div>
         <div className=' link'>
          <p>Returns</p>
          <p className='font-extrabold md:text-sm'>&Orders</p>
         </div>
         <div className=' link flex items-center relative'>
          <span className='bg-yellow-400 w-4 text-center rounded-full absolute top-0 right-0 md:right-12 h-4 text-black font-medium'>0</span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-9 ">

  <path strokeLinecap="round" strokeLinejoin="round" className='' d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
<p className='font-extrabold md:text-sm hidden md:inline ml-2 mt-2'>Basket</p>
         </div>
        </div>
     </div>
     {/* bottom nav  */}
     <div className='flex p-2 pl-6 items-center space-x-3 bg-amazon_blue-light text-white text-sm'>
      <p className='link flex items-center font-medium '>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
All
      </p>
      <p className='link font-medium ml-6' >Today Deals</p>
      <p className='link font-medium ml-6' >Customer Service</p>
      <p className='link font-medium ml-6' >Registry</p>
      <p className='link font-medium ml-6' >Sell</p>
      <p className='link font-medium ml-6 hidden lg:inline' >Electronics</p>
      <p className='link font-medium ml-6 hidden lg:inline' >Food & Grocery</p>
      <p className='link font-medium ml-6 hidden lg:inline' >Prim</p>
      <p className='link font-medium ml-6 hidden lg:inline' >Buy Again</p>
      <p className='link font-medium ml-6 hidden lg:inline' >Shopper Toolkit</p>
      <p className='link font-medium ml-6 hidden lg:inline' >Health & Personal Car </p>
     </div>
    </header>
   </>
  )
}



export default Header
