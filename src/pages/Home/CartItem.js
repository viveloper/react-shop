import React from 'react';
import allImage from '@/assets/images/products/*.jpeg';

function CartItem({ id, name, count, price, onRemoveClick }) {
  const handleRemoveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onRemoveClick(id);
  };

  return (
    <>
      <li key={id} className="cart-item">
        <a href="#remove" className="navy-link remove-item" onClick={handleRemoveClick}>
          ×
        </a>
        <a href="./product-detail.html">
          <img width="250" height="250" src={allImage[`item${id}`]} alt="Note 01" className="p-3" />
          {name}
        </a>
        <span className="quantity">
          {' '}
          {count} × <span className="price">{price} WON</span>{' '}
        </span>
      </li>
      <style jsx>{`
        li.cart-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          position: relative;
          display: block;
          padding: 20px 50px 0 125px;
          min-height: 100px;
          width: 100%;
          overflow: hidden;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
          color: #4a4a4a;
        }
        li.cart-item a {
          display: block;
          font-weight: bold;
          line-height: 1.5;
          color: #4a4a4a;
          text-decoration: none;
        }
        li.cart-item a.remove-item {
          position: absolute;
          top: 20px;
          right: 30px;
          margin: 0;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
        }
        li.cart-item img {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          max-width: 100px;
          width: 100px;
          height: 100px;
        }
        li.cart-item img {
          max-width: 150px;
          width: 100px;
          height: 100px;
        }
        li.cart-item .quantity {
          padding-bottom: 15px;
          display: inline-block;
          color: rgba(0, 0, 0, 0.35);
        }
      `}</style>
    </>
  );
}

export default React.memo(CartItem);
