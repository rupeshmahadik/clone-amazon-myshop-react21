import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import {useSelector,useDispatch} from 'react-redux'
import SigninPage from './pages/SigninPage'
import {signout} from './actions/userActions'

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
                                <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
                             </ul>
                        </div> 
                    )
                    :
                    (
                      <Link to="/signin">Sign In</Link>
                     )
                }
                
            </div>
        </header>
        <main>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/product/:id" component={ProductPage} exact></Route>
        <Route path="/signin" component={SigninPage} ></Route>
        <Route path="/" component={HomePage} exact></Route> 
           
          
        </main>
        <footer className="row center">All rights Reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
