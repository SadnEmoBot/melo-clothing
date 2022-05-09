import React from "react";
import CategoryItem from "../category-item/category-item";
import "./category-list.scss";

const CategoryList = () => {
    const categories = [
        {
            categoryId: 1,
            title: "hats",
            imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        },
        {
            categoryId: 2,
            title: "jackets",
            imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        },
        {
            categoryId: 3,
            title: "sneakers",
            imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        },
        {
            categoryId: 4,
            title: "womens",
            imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        },
        {
            categoryId: 5,
            title: "mens",
            imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        },
    ];
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.categoryId} category={category} />
            ))}
        </div>
    );
};

export default CategoryList;
