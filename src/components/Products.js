import React from 'react'
import Product from './Product'

const Products = () => {
  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
      <div class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
        <div class="flex flex-wrap">
         <Product/>
         <Product/>
         <Product/>
         <Product/>
          
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Products