import React from "react";
import CategoryItem from "../category-item/category-item";
import { CategoriesContainer } from "./category-list.styles";

const CategoryList = () => {
    const categories = [
        {
            categoryId: 1,
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
            route: "shop/hats",
        },
        {
            categoryId: 2,
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
            route: "shop/jackets",
        },
        {
            categoryId: 3,
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
            route: "shop/sneakers",
        },
        {
            categoryId: 4,
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
            route: "shop/womens",
        },
        {
            categoryId: 5,
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
            route: "shop/mens",
        },
    ];
    return (
        <CategoriesContainer>
            {categories.map((category) => (
                <CategoryItem key={category.categoryId} category={category} />
            ))}
        </CategoriesContainer>
    );
};

export default CategoryList;
