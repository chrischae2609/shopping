
import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import CartCount from "./components/CartCount.jsx";

import Icon from '@mdi/react';
import { mdiHomeCircleOutline, mdiStoreOutline, mdiCartOutline } from '@mdi/js';

import './App.css'

function App() {
  const [inCart, setInCart] = useState([]); // array representing cart
  
  const cartCount = inCart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function addToCart(product, size) {
    setInCart(prev => {
      const existing = prev.find(
        item => item.productId === product.id && item.size === size
      );
      if (existing) {
        return prev.map(item => 
          item.productId === product.id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
          );
      }

      return [
        ...prev,
        {
          productId: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          size,
          quantity: 1
        }
      ];
    });
  }

  function removeFromCart(productId, size) {
    setInCart(prev => {
      const item = prev.find(
        i => i.productId === productId && i.size === size
      );

      if (!item) return prev;

      if (item.quantity > 1) {
        return prev.map(i => 
          i.productId === productId && i.size === size
            ? { ...i, quantity: i.quantity - 1}
            : i
        );
      }
      return prev.filter(
        i => !(i.productId === productId && i.size === size)
      );
    });
  }

  function incrementCartItem(productId, size) {
    setInCart(prev => 
      prev.map(item =>
        item.productId === productId && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
    );
  }


  return (
    <>
      <div className="header">
        <h1>Azamon</h1>
        <nav>
          <Link to="/">
            <Icon path={mdiHomeCircleOutline} size={1.5} />
          </Link>
          <Link to="/shop">
            <Icon path={mdiStoreOutline} size={1.5} />
          </Link>
          <div className="cartIcon">
            <Link to="/cart"><Icon path={mdiCartOutline} size={1.5} /></Link>
            <CartCount cartCount={cartCount}></CartCount>
          </div>
        </nav>
      </div>
      <main>
        <Outlet context={{ inCart, addToCart, removeFromCart, incrementCartItem}}/>
      </main>
    </>
  )
}

export default App;
