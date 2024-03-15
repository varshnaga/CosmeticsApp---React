import { useDispatch } from "react-redux";
import { addProduct } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
    const {productName, image_url, price, rating} = props.product;

    const dispatch = useDispatch();
    const addProductToCart = (product) => {
        dispatch(addProduct(product));
    }
    
    return (
        <div className="product-card-container">
            <div className="bestseller">
                {props.product.promoted && <label className="bestSellerLabel">BESTSELLER</label>}
            </div>
            <div className="img-title-container">
                <Link to={"/products/" + props.product.product_id} style={{textDecoration: 'none', color: 'unset'}}><img className="product-image" src={image_url}></img></Link>
                <center className="product-title">{productName}</center>
            </div>
            <center className="padding-top40">MRP ${price}</center>
            <center>{rating} stars</center>
            <button className="add-to-bag" onClick={() => addProductToCart(props.product)}>Add to Bag</button>
        </div>
    );
}

export default ProductCard;