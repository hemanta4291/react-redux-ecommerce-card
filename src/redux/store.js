import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import stockLogger from "./middlewares/stockLogger";
import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, applyMiddleware());
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware()));

export default store;