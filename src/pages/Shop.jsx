
import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router";

import Product from "../components/Product.jsx";

import '../styles/shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);

    const { addToCart } = useOutletContext();

    useEffect(() => { // fetching data
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => setProducts(data));
    }, [])

    return ( // how shop page should look
    
        <div className="shopPage">
            <h1>Azamon Best Sellers</h1>
            <div className="productGrid">
                {products.map(product => (
                    <Product 
                        product={product} 
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;