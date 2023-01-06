import { combineReducers } from "redux";
import productReducer from "./product/ProductReducer";
import cardReducer from "./card/CardReducer";

const rootReducer = combineReducers({
    product: productReducer,
    card:cardReducer,
});

export default rootReducer;