import data from './data'
import { useState } from 'react';
import Products from './components/Products/Products'
import Filter from './components/Filter/Filter';

function App() {
  const [products, setProducts] = useState(data.products)
  const [size, setSize] = useState('')
  const [sort, setSort] = useState('')

  const sortProducts = (order) => {
    setSort(order)
    sort === 'Latest' && setProducts(data.products)
    sort === 'lowest' && setProducts(data.products.sort((a, b) =>(
                          a.price < b.price ? 1 : -1    
                         )))
    sort === 'highest' && setProducts(data.products.sort((a, b) =>(
                            a.price > b.price ? 1 : -1    
                          )))
    
  }

  const filterProducts = (size) => {
    setSize(size)
    size === "" ?
    setProducts(data.products) 
    :
    setProducts(data.products.filter(product => product.availableSizes.indexOf(size)>0))
  }

  return (
    <div className="App grid-container">
      <header className="app-header">
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter 
              count={products.length}
              sort={sort}
              size={size}
              sortProducts={sortProducts}
              filterProducts={filterProducts}
            />
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
