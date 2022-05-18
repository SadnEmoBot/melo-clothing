import { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { signOutUser } from "../../utils/firebase.js";

import { CartContext } from "../../contexts/cart.context";

// import "./navigation.scss";
import {
    NavigationContainer,
    LogoContainer,
    NavLinksContainer,
    NavLink,
} from "./navigation.styles";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    let { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    };
    return (
        <>
            <NavigationContainer>
                <LogoContainer to={"/"}>
                    <CrwnLogo />
                </LogoContainer>

                <NavLinksContainer>
                    <NavLink to={"/shop"}>SHOP</NavLink>
                    {currentUser ? (
                        <NavLink as={"span"} onClick={signOutHandler}>
                            SIGN OUT
                        </NavLink>
                    ) : (
                        <NavLink to={"/auth"}>SIGN IN</NavLink>
                    )}
                    <CartIcon />
                </NavLinksContainer>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    );
};

export default Navigation;
