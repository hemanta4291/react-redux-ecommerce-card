import { DECREMENT,INCREMENT} from "./actionTypes";

export const productIncrement = (value) => {
    return {
        type: INCREMENT,
        payload:value
    };
};
export const productDecrement = (value) => {
    return {
        type: DECREMENT,
        payload:value
    };
};