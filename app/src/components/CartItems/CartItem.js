

const CartItem = ({item, removeFromCart}) => {
    return (
            <div className="cart-item">
                <div className="item-img">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="item-details">
                    <div>{item.title}</div>
                    <div className='right'>
                        {item.price} * {item.count}{'  '}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </div>
                </div>                
            </div>
    )
}

export default CartItem
