import data from './data'
import { useState } from 'react';
import Products from './components/Products/Products'

function App() {
  const [products, setProducts] = useState(data.products)
  const [size, setSize] = useState('')
  const [sort, setSort] = useState('')

  return (
    <div className="App grid-container">
      <header className="app-header">
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Products products={products} />
          </div>
          <div className="sidebar">
            Cart Items
          </div>
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
}

export default App;
