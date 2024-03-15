import { useParams } from "react-router-dom";
import useProductData from "../utils/useProductData";

let ProductDescription = () => {

    const {productId} = useParams();
    const productData = useProductData(productId);
    
    if (productData !== null) {
       const {image_url, productName, countryOfOrigin, expiryDate, howToUse, ingredients, price, quantity, rating} = productData[0];

        return (
            <div className="description-container"> 
                <div className="product-img">
                    <img src={image_url}></img>
                </div>
                <div className="product-description">
                    <span className="productName">{productName}</span>
                    <div className="productInfo">
                        <span>({quantity})</span>
                        <span>MRP: Rs.<b>{price}</b> (inclusive of all taxes)</span>
                        <span><b>Rating: </b> {rating}</span>
                        <span><b>Country Of Origin: </b>{countryOfOrigin}</span>
                        <span><b>Expiry Date: </b>{expiryDate}</span>
                        <span><b>Ingredients: </b>{ingredients}</span>
                        <span><b>How to Use: </b>{howToUse}</span>
                        <button className="addToBag">Add to Bag</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDescription;