import React from 'react'
import CardItem from './CardItem'

const Card = () => {
  return (
    <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
        <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>
            
            <CardItem/>

            <div className='flex justify-between border-b-4 mt-4 mb-2'>
                <div class="text-lg py-2">
                        <p>
                        Total Item
                        </p>
                    </div>
                <div class="text-3xl py-2">
                    <h2>18</h2>
                    
                </div>
            </div>
            <div className='flex justify-between mt-4 mb-2'>
                <div class="text-lg py-2">
                        <p>
                        Total Price
                        </p>
                    </div>
                <div class="text-3xl py-2">
                    <h2>180 taka</h2>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card