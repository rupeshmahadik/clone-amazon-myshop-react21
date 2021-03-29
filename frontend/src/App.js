import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import {useSelector,useDispatch} from 'react-redux'
import SigninPage from './pages/SigninPage'
import {signout} from './actions/userActions'
import RegisterPage from './pages/RegisterPage'
import ShippingAddressPage from './pages/ShippingAddressPage'
import PaymentMethodPage from './pages/PaymentMethodPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import OrderPage from './pages/OrderPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import ProfilePage from './pages/ProfilePage'
import PrivateRoute from './components/PrivateRoute'


function App() {
    const cart = useSelector(state => state.cart)
    const {cartItems} =  cart
    const userSignin = useSelector((state)=> state.userSignin)
    const {userInfo} = userSignin

    const dispatch = useDispatch()
    const signoutHandler = ()=>{
        dispatch(signout())
    }

  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <Link className="logo" to="/">MyShop</Link>
            </div>
            <div>
                <Link to="/cart">Cart
                {
                    cartItems.length > 0 && (
                        <span className="badge">{cartItems.length}</span>
                        )
                }
                </Link>
                {
                    userInfo ?
                        (
                        <div className="dropdown">
                             <Link to="#">
                                {userInfo.name} <i className="fa fa-caret-down"></i>{' '} 
                             </Link> 
                             <ul className="dropdown-content">
                                <li>
                                    <Link to="/profile">User Profile</Link>
                                </li>
                                <li>
                                    <Link to="/orderhistory">Order History</Link>
                                </li>
                                <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                             </ul>
                        </div> 
                    )
                    :
                    (
                      <Link to="/signin">Sign In</Link>
                     )
                }
                {
                    userInfo && userInfo.isAdmin && (
                        <div className="dropdown">
                                <Link to="#admin">
                                  Admin <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-content">
                                  <li>
                                    <Link to="/dashboard">Dashboard</Link>
                                  </li>
                                  <li>
                                    <Link to="/productlist">Products</Link>
                                  </li>
                                  <li>
                                    <Link to="/orderlist">Orders</Link>
                                  </li>
                                  <li>
                                    <Link to="/userlist">Users</Link>
                                  </li>
                                </ul>
                        </div>
                        )
                }
            </div>
        </header>
        <main>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/product/:id" component={ProductPage} exact></Route>
        <Route path="/signin" component={SigninPage} ></Route>
        <Route path="/register" component={RegisterPage}></Route>
        <Route path="/shipping" component={ShippingAddressPage}></Route>
        <Route path="/payment" component={PaymentMethodPage}></Route>
        <Route path="/placeorder" component={PlaceOrderPage}></Route>
        <Route path="/order/:id" component={OrderPage}></Route>
        <Route path="/orderhistory" component={OrderHistoryPage}></Route>
        <PrivateRoute path="/profile" component={ProfilePage}></PrivateRoute>
        <Route path="/" component={HomePage} exact></Route> 
           
          
        </main>
        <footer className="row center">All rights Reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
