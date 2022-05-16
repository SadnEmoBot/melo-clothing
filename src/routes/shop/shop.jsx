import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card";
import "./shop.scss";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        // <div className="products-container">
        //     {products.map((product) => (
        //         <ProductCard key={product.id} product={product} />
        //     ))}
        // </div>
        <>
            {Object.keys(categoriesMap).map((title) => (
                <Fragment key={title}>
                    <h2>{title}</h2>
                    <div className="products-container">
                        {categoriesMap[title].map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </Fragment>
            ))}
        </>
    );
};

export default Shop;
