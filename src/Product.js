import React from "react";
//import { useStateValue } from "./StateProvider";
import {connect} from "react-redux";
import "./Product.css";

function Product({id, title, price, rating, image, addToBasket}) {
    // const [state, dispatch] = useStateValue();

    // const addToBasket = () => {
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item: {
    //             //id: id,
    //             title: title,
    //             price: price,
    //             rating: rating,
    //             image: image
    //         }
    //     });
    // }
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title">{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => {
                        return(<p>⭐</p>);
                    })}
                </div>
            </div>
            <img src={image} alt="" />
            {/* <button onClick={addToBasket}>Add to Basket</button> */}
            <button onClick={() => addToBasket(id, title, price, rating, image)}>Add to Basket</button>
        </div>
    );
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        addToBasket: (id, title, price, rating, image) => {dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image
            }
        })}
    }
}
export default connect(null, mapDispatchToProps)(Product);
