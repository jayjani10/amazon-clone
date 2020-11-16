import React from 'react';
import './Payment.css';
import { useStateValue } from '../Components/StateProvider';
import CheckoutProduct from '../Components/Checkout/CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout(
                <Link to='/checkout'>{basket?.length} items</Link>
                    )
                </h1>
                {/* Delivery Address */ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{ user?.email }</p>
                        <p>1, Race Course Road</p>
                        <p>Surendranagar, Gujarat</p>
                    </div>
                </div>
                {/* Review Items */ }
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        { basket.map(item => (
                            <CheckoutProduct
                                id={ item.id }
                                title={ item.title }
                                image={ item.image }
                                price={ item.price }
                                rating={ item.rating }
                            />
                        )) }
                    </div>
                </div>
                {/* Payment Method */ }
                <div className='payment__section'>
                <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{ user?.email }</p>
                        <p>1, Race Course Road</p>
                        <p>Surendranagar, Gujarat</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
