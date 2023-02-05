import Image from 'next/image'
import React ,{ useEffect, useState } from 'react'
import Currency from 'react-currency-formatter';
const Product = ({id , title , price , category , description , image}) => {
 let MaxRating = 5
 let minRating = 1;
const [rating , setRating ] =useState( )
const [hasPrim , setHasPrim ] =useState()


useEffect(() => {
  setRating (Math.floor(Math.random() * (MaxRating - minRating +1))+minRating)
  setHasPrim(Math.random() < .5)
}, [])

  return (
    <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
      <p className='text-end text-xs italic text-gray-400'>{category}</p>
      <Image
      src={image}
      opjectFit="contain"
      alt="img"
      height={200}
      width={200}
      />

      <h4 className='m-3'>{title}</h4>
      <div className='flex items-center'>
       {Array(rating).fill().map( (_ , index) => {
              return <>
              <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
              </>
       })}
      </div>
       <p className='text-xm my-2 line-clamp-2'>{description}</p>

      <div className='mb-5'>
      <Currency
  quantity={price}
  currency="GBP"
/>
      </div>

      {hasPrim && (
        <div className='flex items-center space-x-2 -mt-5'>
          <img className='w-12 ' src="https://links.papareact.com/fdw" alt=" img"/>
          <p className='text-xs text-gray-500'>Free  Next-Day Delivery</p>
        </div>
      )}

      <button className='mt-auto button'>Add To Basket</button>
    </div>
  )
}

export default Product
