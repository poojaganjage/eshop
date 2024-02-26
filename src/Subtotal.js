import { CompressOutlined } from '@mui/icons-material';
import React, {Fragment} from 'react';
import CurrencyFormat from "react-currency-format";
import {connect} from "react-redux";
import "./Subtotal.css";

function Subtotal(props) {
    const subtotal = props.basket.reduce((sum, item) => {
        sum  = sum + item.price
        return sum
    }, 0);
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <Fragment>
                        <p>Subtotal {props.basket.length} items <strong>${value}</strong></p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                        <button>Proceed to Checkout</button>
                    </Fragment>
                )}
                decimalScale={2}
                value={subtotal}
                displayType={"text"}
                thousandSeparator={true}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.basket);
    return {
      basket: state.basket
    }
}
export default connect(mapStateToProps, null)(Subtotal);
