import React from 'react';
import {connect} from "react-redux";
import Header from './Header';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from "./Subtotal";
import Checkoutproduct from "./checkout.png";
import "./Checkout.css";

function Checkout(props) {
  return (
    <React.Fragment>
      <Header />
      <div className='checkout'>
        <div className="checkout__left">
          <img src={Checkoutproduct} alt="" className="checkout__ad" />
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {props.basket.map((item) => {
            return <CheckoutProduct
              id={item.id} 
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          })}
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    basket: state.basket
  }
}
export default connect(mapStateToProps, null)(Checkout);
