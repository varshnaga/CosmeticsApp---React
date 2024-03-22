import ProductCard from "./ProductCard";
import Filters from "./Filters";
import { useState, useEffect } from "react";
import Bestseller from "../Images/Bestseller.png"
import axios from "axios";
import { ALL_PRODUCTS } from "../utils/constants";
import useShopBrands from "../utils/useShopBrands";

let Body = () => {      
    const[listOfProducts, setListOfProducts] = useState(ALL_PRODUCTS);
    const[filteredListOfProducts, setFilteredListOfProducts] = useState(ALL_PRODUCTS);       
    const[searchText, setSearchText] = useState('');
    let shopBrands = useShopBrands();
    const updateProducts = (products) => setFilteredListOfProducts(products);


    /*Temporarily removed since the mock API's have reached the maximum limit */


    // useEffect(()=> {
    //     fetchAllProducts();
    // }, []);

    // const fetchAllProducts = () => {
    //     axios.get(ALL_PRODUCTS)
    //     .then((response) => {
    //         setListOfProducts(response.data);
    //         setFilteredListOfProducts(response.data);
    //     });
    // }


    let setScroll = (shop) => {
        let element = document.getElementById("products-section");
        let { id } = shop;
        element.scrollIntoView({ behavior: "smooth"});
        setFilteredListOfProducts(listOfProducts.filter((product) => (
            product.brandId === id
        )));

    }

    return (
        
        <div className="body-container">
            <img className="bestsellers" src={Bestseller}></img>
            <h3 className="shop-by-brands">SHOP BY BRANDS</h3>
            <div className="shop-card">
                {shopBrands.map((shop) => (
                    <div className="card" key={shop.id}>
                        <img className="shopCard-image" src={shop.img_url} onClick={() => setScroll(shop)} />
                    </div>
                ))}
            </div>
        
            <h3 className="all-products-title">ALL PRODUCTS</h3>
            <div id="products-section">
                <button className="top-rated" onClick={() => {
                    const filteredList = listOfProducts.filter((product) => 
                    product.rating>4
                );
                setFilteredListOfProducts(filteredList);
                }} >Show Top Rated Products</button>
                <input type="text" className="search" placeholder="Search" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                    if(searchText.slice(0,-1) === '') {
                        setFilteredListOfProducts(listOfProducts);
                    }
                }}></input>
                <button className="search-btn" onClick={() => {
                    const filteredProducts = listOfProducts.filter((product) => 
                    product.productName.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredListOfProducts(filteredProducts);
                }}>Search</button>
             </div>

            <div className="products-filter">
                <Filters updateFilteredList={updateProducts} filteredList={filteredListOfProducts} listOfProducts={listOfProducts} shopBrands={shopBrands} />
                <div className="products">
                    {filteredListOfProducts.map((product) => (
                        <ProductCard key={product.product_id} product={product} />
                    ))}
                    {
                        filteredListOfProducts.length === 0 && <span className="no-products">No products to display.</span>
                    }
                </div>
            </div>
        
        </div>
    );



};

export default Body;