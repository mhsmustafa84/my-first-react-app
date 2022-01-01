import { combineReducers } from "redux";
import { counterReducer, cartItemsReducer, cartItemsIDReducer, ProductsReducer } from './reducers';


export default combineReducers({
    counter: counterReducer,
    cartItems: cartItemsReducer,
    cartItemsID: cartItemsIDReducer,
    products: ProductsReducer
});