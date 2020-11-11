import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal (0 items): 
                        <strong>0</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" id="subtotal__checkbox"/> <label for="subtotal__checkbox">This order contains gift</label>
                    </small>
                </>
            )}
                
            decimalScale={2}
            value={0} 
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
