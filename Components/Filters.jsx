import { useEffect, useState } from "react";
import close from "../Images/closeImage.png"

let Filters = (props) => {
    const brandFilter = [];
    const [sortedProducts, setSortedProducts] = useState(props.filteredList);
    let sortBasedOnPrice = (e) => {
        if(e.target.id === 'lessThan500') {
            setSortedProducts(props.listOfProducts.filter((product) => 
                product.price<500
            ));
        } else if(e.target.id === 'lessThan1000') {
            setSortedProducts(props.listOfProducts.filter((product) => 
                product.price<1000
            ));
        }
    }

    useEffect(() => {
        props.updateFilteredList(sortedProducts);
    }, [sortedProducts]);

    let clearPriceFilter = () => {
        setSortedProducts(props.listOfProducts);
        document.getElementById("lessThan500").checked = false;
        document.getElementById("lessThan1000").checked = false;
    }
    
    const setProductType = () => {
        let checkedProductTypes = document.querySelectorAll('input[name=productType]:checked');
        if (!checkedProductTypes.length) {
            props.updateFilteredList(props.listOfProducts);
        } else {
            const productsToView = [];
            for(let product of checkedProductTypes) {
                productsToView.push(product.id)
            }
            const filteredList = props.listOfProducts.filter((product) =>(
                productsToView.includes(product.productType)
            ));
            props.updateFilteredList(filteredList);
        }
    }

    const viewByBrand = () => {
        const checkedBrands = document.querySelectorAll('input[name=brand]:checked');
        if (!checkedBrands.length) {
            props.updateFilteredList(props.listOfProducts);
        } else {
            for (let brand of checkedBrands) {
                brandFilter.push(parseInt(brand.id));
            }
            const filteredList = props.listOfProducts.filter((product) => (
                brandFilter.includes(product.brandId)
            ));
            props.updateFilteredList(filteredList);
        }
    }
    
    
    return (
        <div className="filters-container">
            <div className="sort">
                {sortedProducts.length < props.listOfProducts.length && <img className="close-btn" style={{position: "absolute"}} src={close} onClick={() => clearPriceFilter()}></img>}
                <span className="sort-title">View By Price</span><hr></hr><br />
                <form name="sort-by-price">
                    <div className="sort-1">
                        <label className="lowToHigh-label" htmlFor="lowToHigh">Less than Rs. 500</label>
                        <input className="lowToHigh-btn" type="radio" id="lessThan500" name="pricingFilter" value="Low to High" onChange={(e) => sortBasedOnPrice(e)} />
                    </div>
                
                    <div className="sort-2">
                        <label className="highToLow-label" htmlFor="lowToHigh">Less than Rs. 1000</label>
                        <input className="highToLow-btn" type="radio" id="lessThan1000" name="pricingFilter" value="High to Low" onChange={(e) => sortBasedOnPrice(e)}/>
                    </div>
                </form>

                <span className="filter-title">View by Product Type</span><hr></hr><br />
                <div className="sort-1">
                    <label className="lowToHigh-label" htmlFor="lipsticks">Lipsticks</label>
                    <input className="lowToHigh-btn" type="checkbox" id="Lipstick" name="productType" value="lipsticks" onChange={() => setProductType()} />
                </div>
                <div className="sort-2">
                    <label className="highToLow-label" htmlFor="foundations">Foundations</label>
                    <input className="highToLow-btn" type="checkbox" id="Foundation" name="productType" value="foundations" onChange={() => setProductType()} />
                </div>
                <div className="sort-2">
                    <label className="highToLow-label" htmlFor="primer">Primer</label>
                    <input className="highToLow-btn" type="checkbox" id="Primer" name="productType" value="primer" onChange={() => setProductType()} />
                </div>
                <div className="sort-2">
                    <label className="highToLow-label" htmlFor="kajal">Kajal & Eyeliners</label>
                    <input className="highToLow-btn" type="checkbox" id="Kajal" name="productType" value="kajal" onChange={() => setProductType()} />
                </div>
                <div className="sort-2">
                    <label className="highToLow-label" htmlFor="blush">Blush</label>
                    <input className="highToLow-btn" type="checkbox" id="Blush" name="productType" value="blush" onChange={() => setProductType()} />
                </div>
                <span className="filter-title">View By Brand</span><hr></hr><br />
                {
                    props.shopBrands.map((brand) => (
                        <div className="brandFilters" key={brand.id}>
                            <label className="brand-label" htmlFor="brand" >{brand.name}</label>
                            <input className="dynamicBrands" type="checkbox" id={brand.id} name="brand" value="brand" onChange={() => viewByBrand()} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Filters;