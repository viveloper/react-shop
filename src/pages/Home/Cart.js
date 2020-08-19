import React, { useMemo } from 'react';
import CartItem from './CartItem';

function Cart({ items, onClose, onRemoveClick, onCheckout }) {
  const totalPrice = useMemo(() => items.reduce((acc, item) => acc + item.price * item.count, 0), [items]);

  const handleCloseBtnClicked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose();
  };

  const handleCheckoutClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCheckout({ items, totalPrice });
  };

  return (
    <>
      <div className="shopping-cart">
        <div className="cart-header text-center p-3">
          <a href="#" className="drawer-close navy-link float-left" onClick={handleCloseBtnClicked}>
            <i className="fa fa-chevron-left fa-lg" aria-hidden="true"></i>
          </a>
          <span className="navy">SHOPPING CART</span>
          <div className="navy-line"></div>
        </div>
        <div className="cart-content">
          <ul className="list-unstyled">
            {items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                count={item.count}
                onRemoveClick={onRemoveClick}
              />
            ))}
          </ul>
          <div className="total-section px-3 py-4 gray-bg">
            <span>TOTAL:</span>
            <span className="float-right m-0 price">{totalPrice}</span>
          </div>
        </div>
        <div className="cart-footer p-3">
          <a
            className="btn btn-lg btn-primary checkout-btn"
            href="./checkout.html"
            role="button"
            onClick={handleCheckoutClick}>
            Checkout
          </a>
        </div>
      </div>
      <style jsx>{`
        .shopping-cart {
          height: 100%;
        }
        .shopping-cart .total-section {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }
        .shopping-cart .checkout-btn {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Cart;
