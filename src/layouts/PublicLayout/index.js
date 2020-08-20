import React, { useState } from 'react';
import { Route, useHistory } from 'react-router-dom';
import Drawer from '@/components/Drawer';
import Cart from '@/pages/Home/Cart';
import Navigation from '@/components/Navigation';
import Footer from '@/pages/Home/Footer';

function PublicLayout({ theme, component: Component, ...rest }) {
  const [isShopingCartOpen, setIsShopingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const history = useHistory();

  const addCartItem = (product) => {
    if (cartItems.find((item) => item.id === product.id)) {
      setCartItems(cartItems.map((item) => (item.id === product.id ? { ...item, count: item.count + 1 } : item)));
    } else {
      setCartItems([...cartItems, { ...product, count: 1 }]);
    }
  };

  const handleCartClick = () => {
    setIsShopingCartOpen(!isShopingCartOpen);
  };

  const handleCartItemRemoveClick = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleCheckout = ({ items, totalPrice }) => {
    console.log(`Checkout ${JSON.stringify(items)} total: ${totalPrice}`);
    if (items.length === 0) {
      alert('물건이 없습니다.');
      return;
    }
    history.push('/checkout');
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Drawer isOpen={isShopingCartOpen}>
            <Cart
              items={cartItems}
              onClose={handleCartClick}
              onRemoveClick={handleCartItemRemoveClick}
              onCheckout={handleCheckout}
            />
          </Drawer>
          <Navigation theme={theme} cartItemCounts={cartItems.length} onCartClick={handleCartClick} />
          <Component {...matchProps} onAddCartItem={addCartItem} />
          <Footer />
        </>
      )}
    />
  );
}

export default PublicLayout;
