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
const clearCartItem = (cartItems, product) => {
    return cartItems.filter((item) => item.id !== product.id);
};

const dereaseCartItem = (cartItems, product) => {
    if (product.quantity > 1) {
        return cartItems.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
        );
    } else {
        return clearCartItem(cartItems, product);
    }
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},

    cartCount: 0,
    cartTotal: 0,

    clearItemFromCart: () => {},
    decreaseItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((pre, cur) => {
            return pre + cur.quantity;
        }, 0);
        const newcartTotal = cartItems.reduce((pre, cur) => {
            return parseInt(pre + cur.price * cur.quantity).toFixed(2);
        }, 0);
        setCartCount(newCartCount);
        setcartTotal(newcartTotal);
    }, [cartItems]);

    // product是product-card.jsx点击item的add to cart传过来的product
    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    };

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems, product));
    };

    const decreaseItemToCart = (product) => {
        setCartItems(dereaseCartItem(cartItems, product));
    };

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        cartCount,
        cartTotal,
        decreaseItemToCart,
        clearItemFromCart,
    };
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
