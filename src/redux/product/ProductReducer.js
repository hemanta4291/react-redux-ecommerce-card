import { DECREMENT,INCREMENT } from "./actionTypes";

const initialState = [
        {
            id:1,
            title:'Asus Vivobook X515MA',
            quantity:10,
            price:88715.25
        },
        {
            id:2,
            title:'HP Vivobook X515MA',
            quantity:10,
            price:789.14
        },
        {
            id:3,
            title:'Lenevo Vivobook X515MA',
            quantity:10,
            price:4857.21
        }
    ]


const productReducer = (state = initialState, action) => {
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
                return {
                    ...product,
                    quantity:product.quantity - 1
                }
             }else{
                return {...product}
             }
         })
           

        default:
            return state;
    }
};

export default productReducer;