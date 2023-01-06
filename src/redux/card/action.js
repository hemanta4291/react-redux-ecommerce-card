import { DECREMENT,INCREMENT } from "./actionTypes";

export const cardIncrement = (value) => {
    return {
        type: INCREMENT,
        payload:value
    };
};
export const cardDecrement = (value) => {
    return {
        type: DECREMENT,
        payload:value
    };
};