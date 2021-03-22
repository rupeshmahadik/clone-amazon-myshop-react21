import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
// import data from './data'
import {productListReducer,productDeatilsReducer} from './reducers/productReducers'
import {cartReducer} from './reducers/cartReducers'

const intialstate = {
	cart:{
		cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
	}
}
// const reducer = (state,action) =>{
// 	return {products : data.products}
// }

const reducer = combineReducers({
	productList : productListReducer,
	productDetails: productDeatilsReducer,
	cart: cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, intialstate , composeEnhancer(applyMiddleware(thunk)))

export default store ;

