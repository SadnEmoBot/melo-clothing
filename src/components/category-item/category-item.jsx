import React from "react";
import { Link } from "react-router-dom";
import "./category-item.scss";

const categoryItem = ({ category }) => {
    return (
        <>
            <div className="category-item-container">
                <div
                    className="background-image"
                    style={{
                        backgroundImage: `url(${category.imageUrl})`,
                    }}
                />
                <Link className="category-item-body-container" to={`shop/${category.title}`}>
                    <h2>{category.title}</h2>
                    <p>Shop Now</p>
                </Link>
            </div>
        </>
    );
};

export default categoryItem;
