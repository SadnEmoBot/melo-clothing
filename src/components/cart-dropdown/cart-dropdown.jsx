import Button from "../button/button";

import "./cart-dropdown.scss";

const CartDropdown = () => (
    <div className="cart-dropdown-container">
        <div className="cart-items" />
        <Button buttonText={"GO TO CHECKOUT"}></Button>
    </div>
);

export default CartDropdown;
