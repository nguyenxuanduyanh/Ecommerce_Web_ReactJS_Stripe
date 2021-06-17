import { useState, useEffect } from 'react';
import { Navbar, Products, Cart } from './components';
import { commerce } from './libs/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());

  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart)
  }

  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  }

  const handleEmptyCart = async (productId) => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);



  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}></Navbar>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart}></Products>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} handleEmptyCart={handleEmptyCart} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCartQuantity={handleUpdateCartQuantity} ></Cart>
          </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
