import { ALL_PRODUCTS } from "./constants";
import { useEffect, useState } from "react";
import axios from "axios";



let useProductData = (productId) => {
    const [productDesc, setProductDesc] = useState(null);

    useEffect(() => {
        const requiredProduct = ALL_PRODUCTS.filter(product => product.product_id === productId);
        setProductDesc(requiredProduct);
    }, [])
    // useEffect(() => {
    //     fetchProduct();
    // }, []);

    // const fetchProduct = () => {
    //     axios.get(ALL_PRODUCTS)
    //     .then((response) => {
    //         setProductDesc(response?.data.filter(product => product.product_id === productId));
    //     })
    // }
   return productDesc;
}

export default useProductData;