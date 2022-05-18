import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
// import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
// import "./cart-icon.scss";
import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleCartDropdown}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
