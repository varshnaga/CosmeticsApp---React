import logo from '../Images/Peach.png';
import cart from '../Images/cart.png';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { BESTSELLER_IMG_URL } from "../utils/constants";


let HeadingComponent = () => {
    const onlineStatus = useOnlineStatus();
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.products);

    const showNavItems = () => {
       const nav = document.getElementById("menu-items");
       nav.style.display === "block" ? (nav.style.display = "none") : (nav.style.display = "block");
    }
    return (
    <div className="fixed">
        <div className="header-container">
            <a class="menu-icon">
                <i class="fa fa-bars" onClick={() => showNavItems()}></i>
            </a>
            <div className="logo-container">
            <Link to="/" style={{textDecoration: 'none', color:'unset'}}><img className="img" src={logo}></img></Link>
            </div>
            <span  className="onlineStatus">Online Status: {(onlineStatus === true ? "✅" : "🔴")}</span>
            <button className="login">Login</button>
            <Link to="./cart.jsx"><img className="cart-icon" src={cart} /></Link>
            {cartItems.length !== 0 && <span className="cart-count">{cartItems.length}</span>} 
        </div>
    </div>
    );
}






export default HeadingComponent;