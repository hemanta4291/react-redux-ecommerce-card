import React from 'react'

const CardItem = () => {
  return (
    <div className='flex justify-between border-b-2 mb-2'>
         <div class="text-lg py-2">
            <p>
            Asus Vivobook X515MA
            </p>
        </div>
        <div class="text-lg py-2">
        <div className='flex justify-between gap-5'>
            <div className='text-white font-base h-12 flex justify-center cursor-pointer bg-green-700 round-full rounded-full p-2'>remove -</div>
            <div>10</div>
            <div className='text-white font-base h-12 flex justify-center cursor-pointer bg-green-700 round-full rounded-full p-2'>Add +</div>
        </div>
                    
        </div>
     </div>
  )
}

export default CardItem