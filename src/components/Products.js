import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cardIncrement } from '../redux/card/action';
import { productDecrement } from '../redux/product/action';
import Product from './Product'

const Products = () => {
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const incrementHandler = (item) => {
      dispatch(productDecrement(item));
      dispatch(cardIncrement(item));

    }

    let content = null;
    content =  product?.map((item,)=>(
      <Product item={item} key={item.id} incrementHandler={()=>incrementHandler(item)}/>
      ))

    return (
    <div className='col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8'>
      <div class="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div class="container mx-auto">
        <div class="flex flex-wrap">
         {
          content
         }
        </div>
      </div>
    </div>
  </div>
  )
}

export default Products