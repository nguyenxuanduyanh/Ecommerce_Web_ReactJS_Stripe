import { useState, useEffect } from 'react';
import { Navbar, Products } from './components';
import { commerce } from './libs/commerce';

function App() {
  const [products, setProducts] = useState([]);

  const fetchedProducts = async () => {
    const { data } = await commerce.products.list();
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
    </div>
  );
}

export default App;
