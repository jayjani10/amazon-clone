import React from 'react';
import './Checkout.css';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_,jpg" alt="" />

                <div>
                    <h2 className="checkout__title">
                        Your shopping cart
                    </h2>
                </div>
            </div>

            <div className="checkout__right">
                <h2>
                    <Subtotal />
                </h2>
            </div>
        </div>
    )
}

export default Checkout
