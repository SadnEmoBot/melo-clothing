import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button";

import "./product-card.scss";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCard = () => addItemToCart(product);

    return (
        <div className="product-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button
                buttonType="inverted"
                buttonText={"Add To Cart"}
                onClick={addProductToCard}
            ></Button>
        </div>
    );
};

export default ProductCard;
