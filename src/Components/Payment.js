import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from '../Components/StateProvider';
import CheckoutProduct from '../Components/Checkout/CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios';
import { db } from '../firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
// 4567 4569 0899 0980 01 / 24 212 13201
// 4556 7354 5657 5647 04 / 27 423
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {

        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                // stripe accepts the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [basket])

    console.log('secret is = ', clientSecret);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent is kinda Payment Confirmation

            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .doc(paymentIntent.id)
                .set( {
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders');
        })
    }

    const handleChange = event => {
        console.log('change event fired');
        // Listen changes and display errors on the go
        setDisabled(event.empty);
        setError(event.error ? event.error.message : '');
    }

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
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'₹'}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
