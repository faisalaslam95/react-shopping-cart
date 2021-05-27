import data from './data'
import { useState } from 'react';
import Products from './components/Products/Products'
import Filter from './components/Filter/Filter';
import Cart from './components/CartItems/Cart';

function App() {
  const [products, setProducts] = useState(data.products)
  const [cartItems, setCartItems] = useState( localStorage.getItem('cartItems') ?
                                              JSON.parse(localStorage.getItem('cartItems')) :
                                              []
                                            )
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

  const addToCart = (product) => {
    let alreadyInCart = false
    const cart = cartItems.slice();
    cart.map(item => {
      if(item._id === product._id) {
      item.count++  
      alreadyInCart = true
      }
    })

    !alreadyInCart && cart.push({...product, count: 1}) 
    
    setCartItems(cart);
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  const removeFromCart = (product) => {
    setCartItems(
      cartItems.filter(item => (
        item._id !== product._id
      ))
    )
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }

  const createOrder = ({email, name , address}) => {
    console.log(email)
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
            <Products 
              products={products}
              addToCart={addToCart}
            />
          </div>
          <div className="sidebar">
            <Cart 
              cartItems={cartItems} 
              removeFromCart={removeFromCart}
              createOrder={createOrder}  
              />
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
