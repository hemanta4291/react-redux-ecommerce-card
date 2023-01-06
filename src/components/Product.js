import React from 'react'

const Product = () => {
  return (
    <div class="w-full px-4 md:w-1/2 xl:w-1/3">
      <div class="mb-10 overflow-hidden rounded-lg bg-white">
        
        <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
          Asus Vivobook X515MA(0)
          </h3>
          <p class="mb-7 text-base leading-relaxed text-body-color">
          Tk 789.14
          </p>

          <a
            href="javascript:void(0)"
            class="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
          >
          add +
          </a>
        </div>
      </div>
    </div>
  )
}

export default Product