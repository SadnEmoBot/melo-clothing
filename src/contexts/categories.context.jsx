import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shopdata.js";
// import { addCollectionAndDocuments } from "../utils/firebase";
import { getCategoriesAndDocuments } from "../utils/firebase";

// export const ProductsContext = createContext({
//     products: [],
// });
export const CategoriesContext = createContext({
    categoriesMap: {},
});

// export const ProductsProvider = ({ children }) => {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         // addCollectionAndDocuments("categories", SHOP_DATA);
//         const getCategoryMap = async () => {
//             const categoryMap = await getCategoriesAndDocuments();
//             console.log(categoryMap);
//             setProducts(categoryMap);
//         };
//         getCategoryMap();
//     }, []);

//     const value = { products, setProducts };
//     return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
// };
export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments("categories");
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);

    const value = { categoriesMap };
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
