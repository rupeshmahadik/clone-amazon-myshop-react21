import {BrowserRouter,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'


function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="logo" href="/">MyShop</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">Sign In</a>
            </div>
        </header>
        <main>
        <Route path="/product/:id" component={ProductPage} exact></Route>
        <Route path="/" component={HomePage} exact></Route> 
           
          
        </main>
        <footer className="row center">All rights Reserved.</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
