import React from 'react';
import {connect} from "react-redux";
import "./CheckoutProduct.css";

function CheckoutProduct({id, title, price, rating, image, removeFromBasket}) {
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <div className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </div>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map(() => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={() => {removeFromBasket(id)}}>Remove from Basket</button>
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromBasket: (id) => {dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id,
            }
        })}
    }
}
export default connect(null, mapDispatchToProps)(CheckoutProduct);