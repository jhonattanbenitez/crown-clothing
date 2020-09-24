import React from "react";
import { connect } from "react-redux";
import { togglecartHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.component.scss";

const CartIcon = ({ togglecartHidden, itemCount }) => (
  <div className="cart-icon" onClick={togglecartHidden}>
    <ShoppingIcon className="shopping-icon" />
        <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  togglecartHidden: () => dispatch(togglecartHidden()),
});
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
