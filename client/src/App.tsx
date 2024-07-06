import { useEffect, useState } from 'react';
import { Product } from './products';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="app">
      <h1>Store</h1>
      {products.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
  );
}

export default App;
