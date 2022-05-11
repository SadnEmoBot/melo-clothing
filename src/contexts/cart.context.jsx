import { createContext, useState, useEffect } from "react";

// cartItems是购物车cart里的item, productToAdd是shop.jsx点击item的add to cart传过来的product
export const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    // if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
    }
    // return new array with modified cartItems / new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},

    cartCount: 0,
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((pre, cur) => {
            return pre + cur.quantity;
        }, 0);
        setCartCount(newCartCount);
    }, [cartItems]);

    // product是product-card.jsx点击item的add to cart传过来的product
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
