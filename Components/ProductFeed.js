import React from 'react'
import Product from './Product'

const ProductFeed = ({product}) => {
console.log(product)
  return (
    <div className='grid grid-flow-row-dense md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 md:-mt-52 mx-auto '>
      {product.slice( 0 , 4).map( ({id , title , price , category , description , image}) => 
        <>
           <Product 
           key={id}
           title={title}
           price={price}
           category={category}
           description={description}
           image={image}
           />

        </>
       )}

       
<img className='md:col-span-full' src="https://links.papareact.com/dyz" alt="img" />

<div className='md:col-span-2 '>
{product.slice( 4 , 5).map( ({id , title , price , category , description , image}) => 
        <>
           <Product 
           key={id}
           title={title}
           price={price}
           category={category}
           description={description}
           image={image}
           />

        </>
       )}
</div>

{product.slice( 5 ,product.length).map( ({id , title , price , category , description , image}) => 
        <>
           <Product 
           key={id}
           title={title}
           price={price}
           category={category}
           description={description}
           image={image}
           />

        </>
       )}
    </div>

  
  )
}

export default ProductFeed
