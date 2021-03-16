import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
// import data from './data'
import {productListReducer} from './reducers/productReducers'

const intialstate = {}
// const reducer = (state,action) =>{
// 	return {products : data.products}
// }

const reducer = combineReducers({
	productList : productListReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;
const store = createStore(reducer, intialstate , composeEnhancer(applyMiddleware(thunk)))

export default store ;

