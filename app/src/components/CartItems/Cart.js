import {useState} from 'react'
import CartItem from './CartItem'
import './cart.css'
import Checkout from './Checkout'

const CartItems = ({cartItems, removeFromCart, createOrder}) => {
    const [showCheckout, setShowCheckout] = useState(false)

    

    return (
        <div>
           {
            cartItems.length === 0 ? (
                <div className="cart cart-header">Cart is empty</div>
            ) : (   
                <div className="cart cart-header">
                    You have {cartItems.length} in the cart
                </div>    
                )
           }
               <div className="cart-items cart">
                {
                    cartItems.map(item => (
                    <CartItem 
                        key={item._id} 
                        item={item} 
                        removeFromCart={removeFromCart}
                    />
                    ))
                }
               </div>
               { cartItems.length !==0 && (
               <div className="total">
                    <div>
                    Total: { ' ' }
                    {cartItems.reduce((a,b) => a + b.price * b.count) , 0}
                    </div>
                    <button 
                        className='button primary'
                        onClick={()=> setShowCheckout(true)}
                    >
                    Proceed
                    </button>    
               </div>
               ) 
               }
               {
                showCheckout && <Checkout createOrder={createOrder}/>
               }
        </div>
    )
}

export default CartItems
