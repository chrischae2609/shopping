import { Link, useOutletContext } from "react-router";
import CartItem from "../components/CartItem.jsx";

import Icon from '@mdi/react';
import { mdiCartVariant } from '@mdi/js';

import "../styles/cart.css";

const Cart = () => {
    const { inCart, removeFromCart, incrementCartItem} = useOutletContext(); 
    

    if (inCart.length === 0) { // cart page if nothing is in cart
        return (
            <div className="emptyCart">
                <p>Your Azamon cart is empty</p>
                <Icon path={mdiCartVariant} size={10} />
            </div>
        )
    }
    return ( // cart page when something is in cart
        <div className="cart">
            <h1>Your Cart</h1>
            <div className="cartLayout">
                <div className="cartGrid">
                    {inCart.map(item => ( // presentation for each cart item
                        <CartItem 
                            key={`${item.productId}-${item.size}`} // signifies unique item
                            item={item} 
                            onAdd={incrementCartItem}
                            onRemove={removeFromCart}
                        />
                    ))}
                </div>
                <div className="summary">
                    Subtotal: ${inCart.reduce((accum, item) => {
                        return accum + item.price * item.quantity;
                    }, 0).toFixed(2)}
                    <p>Shipping and fees calculated at checkout</p>
                    <button>Check Out</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;