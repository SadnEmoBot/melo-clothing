import { useContext, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

import { signOutUser } from "../../utils/firebase.js";

import { CartContext } from "../../contexts/cart.context";

import "./navigation.scss";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    let { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
    };
    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to={"/"}>
                    <CrwnLogo className="logo" />
                </Link>

                <div className="nav-links-container">
                    <Link className="nav-link" to={"/shop"}>
                        SHOP
                    </Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>
                            SIGN OUT
                        </span>
                    ) : (
                        <Link className="nav-link" to={"/auth"}>
                            SIGN IN
                        </Link>
                    )}
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
