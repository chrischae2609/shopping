import { Link } from "react-router";
import { useEffect, useState } from "react";
import Cart from "../pages/Cart.jsx";

import '../styles/product.css';

function Product({ product }) {
    const category = product.category;
    const item = product.title;
    const price = product.price;
    
    // when you click add to cart, append the product to the products list
    // display each of the products in cart
    // products.map(product => display whatever needed)

    return (
        <div className="product">
            <Link to={`/shop/${product.id}`} className="productLink">
                <div className="productImg">
                    <img src={product.image} alt="product image" />
                </div>
                <div className="description">
                    <p className="item">{item}</p>
                    <hr></hr>
                    <p className="category">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                    <hr></hr>
                    <p className="price">${price.toFixed(2)}</p>
                </div>
            </Link>
        </div>
    )
}


export default Product