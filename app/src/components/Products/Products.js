import Product from './Product'
import './products.css'
const Products = ({products, addToCart}) => {
    return (
        <div className="products">
          {
              products.map(product => (
                 <Product 
                    key={product._id} 
                    product={product}
                    addToCart={addToCart}
                /> 
              ))
          }  
          </div>
    )
}

export default Products
