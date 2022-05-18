import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./category-item.scss";
import {
    CategoryItemContainer,
    CategoryItemBodyContainer,
    BackgroundImage,
} from "./category-item.styles";

const CategoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();
    const handler = () => navigate(route);
    return (
        <>
            <CategoryItemContainer onClick={handler}>
                <BackgroundImage imageUrl={imageUrl} />
                <CategoryItemBodyContainer>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </CategoryItemBodyContainer>
            </CategoryItemContainer>
        </>
    );
};

export default CategoryItem;
