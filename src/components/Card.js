import React from 'react'
import { useSelector } from 'react-redux';
import CardItem from './CardItem'

const Card = () => {
    const card = useSelector((state) => state.card);
    console.log(card.length ===0)

    const totalQuantity = () => {
        return card.reduce((total, item) => total + item.quantity, 0)
    }
    const totalPrice = () => {
        return card.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)
    }

    let cardItemRenderView =null
    if(card.length === 0 ){
        cardItemRenderView = <div>Card is Empty</div>
    }else{
        cardItemRenderView =  card?.map((item,i)=>(
            <CardItem item={item} key={i}/>
        ))
    }
    

    
    return (
        <div className='col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4'>
            <div className='bg-white py-4 px-4 shadow-md rounded-lg my-4 mx-4'>

                {
                    cardItemRenderView
                }

                <div className='flex justify-between border-b-4 mt-4 mb-2'>
                    <div class="text-lg py-2">
                        <p>
                            Total Item
                        </p>
                    </div>
                    <div class="text-3xl py-2">
                        <h2>{totalQuantity()}</h2>

                    </div>
                </div>
                <div className='flex justify-between mt-4 mb-2'>
                    <div class="text-lg py-2">
                        <p>
                            Total Price
                        </p>
                    </div>
                    <div class="text-3xl py-2">
                        <h2>{totalPrice()} taka</h2>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card