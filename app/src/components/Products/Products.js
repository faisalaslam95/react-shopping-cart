import Product from './Product'
import './products.css'
const Products = ({products}) => {
    return (
        <div className="products">
          {
              products.map(product => (
                 <Product key={product.id} product={product}/> 
              ))
          }  
          </div>
    )
}

export default Products
