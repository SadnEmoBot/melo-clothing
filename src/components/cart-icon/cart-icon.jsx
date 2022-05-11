import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container">
            <ShoppingIcon className="shopping-icon" onClick={toggleCartDropdown} />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
