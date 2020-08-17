import React from 'react';
import item3 from '@/assets/images/products/item3.jpeg';
import item10 from '@/assets/images/products/item10.jpeg';

function Cart() {
  return (
    <>
      <div className="shopping-cart">
        <div className="cart-header text-center p-3">
          <a href="#" className="drawer-close navy-link float-left">
            <i className="fa fa-chevron-left fa-lg" aria-hidden="true"></i>
          </a>
          <span className="navy">SHOPPING CART</span>
          <div className="navy-line"></div>
        </div>
        <div className="cart-content">
          <ul className="list-unstyled">
            <li className="cart-item">
              <a href="#remove" className="navy-link remove-item">
                ×
              </a>
              <a href="./product-detail.html">
                <img width="250" height="250" src={item3} alt="Note 01" className="p-3" />
                Note 01
              </a>
              <span className="quantity">
                {' '}
                2 × <span className="price">2000 WON</span>{' '}
              </span>
            </li>
            <li className="cart-item">
              <a href="#remove" className="navy-link remove-item">
                ×
              </a>
              <a href="./product-detail.html">
                <img width="250" height="250" src={item10} alt="Gloves 01" className="p-3" />
                Gloves 01
              </a>
              <span className="quantity">
                {' '}
                1 × <span className="price">1000 WON</span>{' '}
              </span>
            </li>
          </ul>
          <div className="total-section px-3 py-4 gray-bg">
            <span>TOTAL:</span>
            <span className="float-right m-0 price">5000</span>
          </div>
        </div>
        <div className="cart-footer p-3">
          <a className="btn btn-lg btn-primary checkout-btn" href="./checkout.html" role="button">
            Checkout
          </a>
        </div>
      </div>
      <style jsx>{`
        .shopping-cart {
          height: 100%;
        }
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
