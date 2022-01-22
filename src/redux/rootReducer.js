import {combineReducers} from "redux";
import customerReducer from "./customer/customerReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
    customers: customerReducer,
    products: productReducer
})

export default rootReducer;
