import React from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {NavLink} from "react-router-dom";
//import {useStateValue} from "./StateProvider";
import {connect} from "react-redux";
import "./Header.css";

function Header(props) {
    //const [{basket}, dispatch] = useStateValue();

    return (
        <div className="header">
            <NavLink to="/" style={{textDecoration: "none"}}>
                <div className="header__logo">
                    <StorefrontIcon className="header__logoImage" fontSize="large" />
                    <h2 className="header__logoTitle">eShop</h2>
                </div>
            </NavLink>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <NavLink to="/login" style={{textDecoration: "none"}}>
                    <div className="nav__item">
                        <span className="nav__itemLineOne">Hello Guest</span>
                        <span className="nav__itemLineTwo">Sign In</span>
                    </div>
                </NavLink>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                <NavLink to="/checkout" style={{textDecoration: "none"}}>
                    <div className="nav__itemBasket">
                        <ShoppingBasketIcon />
                        {/* <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span> */}
                        <span className="nav__itemLineTwo nav__basketCount">{props.basket.length}</span>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.basket);
    return {
      basket: state.basket
    }
}
export default connect(mapStateToProps, null)(Header);
