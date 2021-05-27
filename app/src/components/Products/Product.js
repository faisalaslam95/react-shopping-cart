

const Product = ({product, addToCart}) => {
    return (
        <div className = 'product-container'>
            <div className="product">
                <a href={"#" + product._id}>
                    <img src={product.image} alt={product.title} />
                    <p>{product.title}</p>
                </a>
                <div className="product-price">
                    <div className="product-price">${product.price}</div>
                    <button className='button primary' onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product
