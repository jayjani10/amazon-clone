import React, { useContext } from 'react'
import { useStateValue, StateContext } from '../StateProvider';
import './Product.css';

function Product({ title, id, image, price, rating }) {
    // console.log(useStateValue());
    const [{basket}, dispatch] = useContext(StateContext);

    // console.log(basket);
    
    const addToBasket = () => {
        console.log("Hi")
        // dispatch item into data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
        console.log(dispatch, basket)
    }

    return (
        <div className="product" id={id}>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="Product Image"/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
