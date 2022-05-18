import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

// import "./product-card.scss";
import { ProductCardContainer, FooterStyles, Name, Price } from "./product-card.styles";

const ProductCard = ({ product }) => {
    const { name, price, imageUrl } = product;

    const { addItemToCart } = useContext(CartContext);

    const addProductToCard = () => addItemToCart(product);

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <FooterStyles>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </FooterStyles>
            <Button
                buttonType={BUTTON_TYPE_CLASSES.inverted}
                buttonText={"Add To Cart"}
                onClick={addProductToCard}
            ></Button>
        </ProductCardContainer>
    );
};

export default ProductCard;
