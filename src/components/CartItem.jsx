import ProductPage from "../pages/ProductPage.jsx";
import { Link } from "react-router";

import "../styles/cartItem.css";

const CartItem = ({ item, onAdd, onRemove }) => {
    
    return (
        
        <div className="cartItem">
            <Link to={`/shop/${item.productId}`} className="cartProductLink">
                <div className="productCartImg">
                    <img src={item.image} alt="product image"/>
                </div>
                <div className="cartDesc">
                    <p className="cartItemName">{item.title}</p>
                    <p className="cartItemSize">Size: {item.size}</p>
                    <p className="cartPrice">${item.price.toFixed(2)}</p>
                    <div className="cartBtns">
                    <div className="quantBtns">
                        <button onClick={(e) => {e.preventDefault();
                            onRemove(item.productId, item.size)}}>
                            -
                        </button>
                        <button onClick={(e) => {e.preventDefault();
                            onAdd(item.productId, item.size)}}>
                            +
                        </button>
                    </div>
                    <p className="cartQuant">Qty: {item.quantity}</p>
                </div>
                </div>
            </Link>
            <hr></hr>
        </div>

    )
}

export default CartItem;