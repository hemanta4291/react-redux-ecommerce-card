import { INCREMENT,DECREMENT } from "./actionTypes";

const initialState = [
    
    ]


const cardReducer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case INCREMENT:
            const inCard = state.find((item)=>
                item.id === action.payload.id ? true : false
            )
            if(inCard){
                return state.map((product)=> {
                    if(product.id === action.payload.id){
                       return {
                           ...product,
                           quantity:product.quantity +1
                       }
                    }else{
                       return {...product}
                    }
                  })
                
            }else{
                return [
                    ...state,
                    {
                        id:action.payload.id,
                        title:action.payload.title,
                        quantity:1,
                        price:action.payload.price
                    }
                ]
            }
        case DECREMENT:
            return state.map((product)=> {
                if(product.id === action.payload.id){
                   if(product.quantity-1<1 ){
                    var index = state.findIndex(function(o){
                        return o.id === product.id;
                   })
                   if (index !== -1) state.splice(index, 1);
                        // alert("remove")
                   }else{
                    return {
                        ...product,
                        quantity:product.quantity - 1
                    }
                   }
                }else{
                   return {...product}
                }
              })

        default:
            return state;
    }
};

export default cardReducer;