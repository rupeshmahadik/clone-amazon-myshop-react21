import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import {useSelector} from 'react-redux'


function App() {
    const cart = useSelector(state => state.cart)
    const {cartItems} =  cart

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
                <Link to="/signin">Sign In</Link>
            </div>
        </header>
        <main>
        <Route path="/cart/:id?" component={CartPage}></Route>
        <Route path="/product/:id" component={ProductPage} exact></Route>
        <Route path="/" component={HomePage} exact></Route> 
           
          
        </main>
        <footer className="row center">All rights Reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
