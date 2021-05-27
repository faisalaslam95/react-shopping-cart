import {useState} from 'react'

const Checkout = ({createOrder}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const checkout = (e) => {
        e.preventDefault()
        const order = {email, name, address}
        createOrder(order)
    }

    return (
        <div className="checkout-form cart">
            <form action="" onSubmit={(e) => checkout(e) }>
                <div className="form-container cart">
                    <div className="form-control cart">
                        <label htmlFor="">Email</label>
                        <input 
                            name="email"
                            type="email"
                            value={email}
                            onChange={ (e) => setEmail(e.target.value) } 
                            required 
                        />
                    </div>
                    <div className="form-control cart">
                        <label htmlFor="">Name</label>
                        <input 
                            name="email"
                            type="text"
                            value={name}
                            onChange={ (e) => setName(e.target.value) } 
                            required 
                        />
                    </div>
                    <div className="form-control cart">
                        <label htmlFor="">Address</label>
                        <input 
                            name="address"
                            type="text"
                            value={address}
                            onChange={ (e) => setAddress(e.target.value) } 
                            required 
                        />
                    </div>
                    <div className="form-control cart">
                        <button 
                            type='submit' 
                            className='button primary'
                        >
                        Checkout
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Checkout
