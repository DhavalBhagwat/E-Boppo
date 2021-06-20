import { combineReducers } from "redux";
import { productsReducer } from "./CartReducers";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
