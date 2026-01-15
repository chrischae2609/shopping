
import { useOutletContext, useParams } from "react-router";
import { useEffect, useState } from "react";
import Sizes from "../components/Sizes.jsx";

import '../styles/productPage.css';

// product page for when you click on the product in shopping page
const ProductPage = () => {
    const { id } = useParams();
    const { addToCart } = useOutletContext();
    const[product, setProduct] = useState(null);
    const [size, setSize] = useState(null);

    useEffect(() => { // fetching data for specific product
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    const item = product.title;
    const price = product.price;
    return (
        <>
            <div className="productPage">
                <div className="productPageImg">
                    <img src={product.image} alt="product image" />
                </div>

                <div className="right">
                    <div className="description">
                        <h1 className="item">{item}</h1>
                        <hr></hr>
                        <p className="productPrice">${price.toFixed(2)}</p>
                    </div>
                    <div className="buttons">
                        {product.category.endsWith("clothing") && (
                        <Sizes className="sizeBtn" size={size} setSize={setSize}/>
                        )}
                        <button 
                            className="addCartBtn" 
                            disabled={product.category.endsWith("clothing") && !size}
                            onClick={() => addToCart(product, size)}>
                            {product.category.endsWith("clothing") 
                                ? (size ? "Add to Cart" : "Select  Size") 
                                : "Add to Cart"}
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductPage;