import { useSelector } from "react-redux";
import deleteIcon from "../Images/deleteIcon.png";
import { useDispatch } from "react-redux";
import { clearCart, removeProduct } from "../utils/cartSlice";

let Cart = () => {

    const cartItems = useSelector((store) => store.cart.products);
    const dispatch = useDispatch();
    let clearCartItems = () => {
        dispatch(clearCart());
    }

    let deleteItem = (item) => {
        dispatch(removeProduct(item));
    }

    if (cartItems.length === 0) {
        return (
            <span className="empty-message">Cart is Empty. Please add items to cart!</span>
        )
    } else {
        return (
        <div className="cart-container">
            <span className="your-cart">YOUR CART</span>
                {cartItems.map((item) => (
                <div className="cart-layout">
                    <div className="flex-prop">
                        <div className="cart-column1">
                            <img className="cart-img" src={item.image_url}></img>
                        </div>
                        <div className="cart-column2">
                            <span className="cart-product-name">{item.productName}</span>
                            <span className="cart-product-quantity">({item.quantity})</span>
                            <span className="cart-product-price">Rs. {item.price}</span>
                        </div>
                    </div>
                    <div>
                        <button><img className="delete-icon-cart" src={deleteIcon} onClick={(e) => deleteItem(item)}></img></button>
                    </div>
                </div> 
                ))}
            
            <button className="clear-cart" onClick={() => clearCartItems()}>Clear Cart</button>
        </div>
        )
    }
}

export default Cart;