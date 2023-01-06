import React from 'react'
import { useDispatch } from 'react-redux';
import { cardDecrement, cardIncrement } from '../redux/card/action';
import { productDecrement, productIncrement } from '../redux/product/action';

const CardItem = ({item}) => {
  const dispatch = useDispatch();



  const incrementHandler = (item) => {
    dispatch(productDecrement(item));
    dispatch(cardIncrement(item));

  }

  const decrementHandler = (item) => {
    // dispatch(productIncrement(item));
    dispatch(cardDecrement(item));
    // console.log(item.quantity)
    

  }
  return (
    <div className='flex justify-between border-b-2 mb-2'>
         <div class="text-lg py-2">
            <p>
            {item.title}
            </p>
        </div>
        <div class="text-lg py-2">
        <div className='flex justify-between gap-5'>
            <div onClick={()=>decrementHandler(item)} className='text-white font-base h-12 flex justify-center cursor-pointer bg-green-700 round-full rounded-full p-2'>remove -</div>
            <div>{item.quantity}</div>
            <div onClick={()=>incrementHandler(item)} className='text-white font-base h-12 flex justify-center cursor-pointer bg-green-700 round-full rounded-full p-2'>Add +</div>
        </div>
                    
        </div>
     </div>
  )
}

export default CardItem