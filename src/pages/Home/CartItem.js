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
    </>
  );
}

export default React.memo(CartItem);
