import { Link } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";

import { CategoryPreviewContainer, CateogryPreviewTitle, Preview } from "./category-preview.styles";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                {/* <span className="title">{title.toUpperCase()}</span> */}
                <CateogryPreviewTitle to={title}>{title.toUpperCase()}</CateogryPreviewTitle>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx <= 3)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </Preview>
        </CategoryPreviewContainer>
    );
};

export default CategoryPreview;
