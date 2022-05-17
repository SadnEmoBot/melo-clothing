import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
// import ProductCard from "../../components/product-card/product-card";
import CategoryPreview from "../../components/category-preview/category-preview";
// import "./shop.scss";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        // <div className="products-container">
        //     {products.map((product) => (
        //         <ProductCard key={product.id} product={product} />
        //     ))}
        // </div>
        <>
            {Object.keys(categoriesMap).map((title) => {
                /* <h2>{title}</h2>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div> 
                */
                return (
                    <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                );
            })}
        </>
    );
};

export default CategoriesPreview;
