import React from 'react'

const Product = (props) => {
  const {incrementHandler,item} = props 
  return (
    <div class="w-full px-4 md:w-1/2 xl:w-1/3">
      <div class="mb-10 overflow-hidden rounded-lg bg-white">
        
        <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
          {item.title}
          </h3>
          <p class="mb-7 text-base leading-relaxed text-body-color">
          Tk {item.price}
          </p>

          <span
            onClick={incrementHandler}
            class="cursor-pointer inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-black hover:text-white"
          >
          add +
          </span>
        </div>
      </div>
    </div>
  )
}

export default Product