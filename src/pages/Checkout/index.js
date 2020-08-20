import React, { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import allImage from '@/assets/images/products/*.jpeg';

function Checkout() {
  // [ToDo : Fetch Redux Store]
  const [cartItems, setCartItems] = useState([
    {
      id: '2',
      name: 'React Product 2',
      price: 13000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 4,
      total_reviews: 5,
      count: 2,
    },
    {
      id: '3',
      name: 'React Product 3',
      price: 4000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 2,
      total_reviews: 10,
      count: 1,
    },
  ]);

  const totalPrice = useMemo(() => cartItems.reduce((total, item) => total + item.price * item.count, 0), [cartItems]);

  const [inputs, setInputs] = useState({
    email: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    city: '',
    state: '',
    street: '',
    postCode: '',
    orderNote: '',
    cardNumber: '',
    fullName: '',
    expDate: '',
    cvc: '',
  });

  const handleInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleRemoveItemClick = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleOrder = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const order = {
      customer: {
        email: inputs.email,
        phoneNumber: inputs.phoneNumber,
        firstName: inputs.firstName,
        lastName: inputs.lastName,
      },
      items: cartItems.map((item) => ({
        product: item,
        counts: item.count,
      })),
      orderNote: inputs.orderNote,
      address: {
        city: inputs.city,
        state: inputs.state,
        street: inputs.street,
        postCode: inputs.postCode,
      },
      payment: {
        cardNumber: inputs.cardNumber,
        fullName: inputs.fullName,
        expDate: inputs.expDate,
        cvc: inputs.cvc,
      },
      totalPrice: totalPrice,
    };
    console.log(order);
  };

  return (
    <>
      <main>
        <Breadcrumb pathName="checkout" />
        <section className="checkout-section container mb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-xs">
              <h2 className="m-0">Shipping address</h2>
              <form action="" className="form-horizontal mt-4" role="form">
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <label className="control-label">Customer Info</label>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="Firtst Name"
                        value={inputs.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        value={inputs.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    value={inputs.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    className="form-control"
                    placeholder="Phone Number"
                    value={inputs.phoneNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <label className="control-label">Address</label>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="State"
                        value={inputs.state}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <input
                        type="text"
                        name="city"
                        className="form-control"
                        placeholder="City"
                        value={inputs.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                      <input
                        type="text"
                        name="street"
                        className="form-control"
                        placeholder="Street Address"
                        value={inputs.street}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                      <input
                        type="text"
                        name="postCode"
                        className="form-control"
                        placeholder="Postal Code"
                        value={inputs.postCode}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="ShippingMemo" className="control-label">
                    Order Notes
                  </label>
                  <textarea
                    className="form-control"
                    name="orderNote"
                    id="ShippingMemo"
                    cols="20"
                    rows="5"
                    placeholder="Note your order"
                    value={inputs.orderNote}
                    onChange={handleInputChange}></textarea>
                </div>
              </form>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 p-3 order-panel">
              <h2 className="m-0">YOUR ORDER</h2>
              <ul className="list-unstyled mb-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <a
                      href="#remove"
                      className="navy-link remove-item"
                      onClick={(e) => handleRemoveItemClick(e, item.id)}>
                      ×
                    </a>
                    <a href={`/products/${item.id}`}>
                      <img width="250" height="250" src={allImage[`item${item.id}`]} alt={item.name} className="p-3" />
                      {item.name}
                    </a>
                    <span className="quantity">
                      {' '}
                      {item.count} × <span className="price">{item.price} WON</span>{' '}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="navy-line-full"></div>
              <div className="total-section px-3 py-4">
                <span>TOTAL:</span>
                <span className="float-right m-0 price">{totalPrice}</span>
              </div>
              <h2 className="mt-5">PAYMENT</h2>
              <form action="" className="form-horizontal" role="form">
                <div className="form-group">
                  <label className="control-label">Card Number</label>
                  <input
                    className="form-control"
                    autoComplete="cc-number"
                    name="cardNumber"
                    type="text"
                    placeholder="**** **** **** ****"
                    value={inputs.cardNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Full Name</label>
                  <input
                    className="form-control"
                    autoComplete="cc-name"
                    name="fullName"
                    type="text"
                    placeholder="NAME"
                    autoComplete="cc-name"
                    value={inputs.fullName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <label className="control-label">MM/YYYY</label>
                      <input
                        className="form-control"
                        autoComplete="cc-name"
                        name="expDate"
                        type="text"
                        placeholder="01/2019"
                        autoComplete="cc-exp"
                        value={inputs.expDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      <label className="control-label">CVC</label>
                      <input
                        className="form-control"
                        autoComplete="cc-name"
                        name="cvc"
                        type="text"
                        placeholder="***"
                        autoComplete="cc-csc"
                        value={inputs.cvc}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div className="mt-5">
                <a
                  className="btn btn-lg btn-primary checkout-btn"
                  href="./checkout.html"
                  role="button"
                  onClick={handleOrder}>
                  Complete Order
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* checkout */
        .checkout-section .form-horizontal .form-group {
          margin: 0;
          margin-bottom: 8px;
        }
        .order-panel {
          border: 1px solid #ddd;
          min-height: 500px;
        }
        .order-panel .total-section span {
          font-size: 18px;
          font-weight: 500;
        }
        .order-panel .checkout-btn {
          width: 100%;
        }

        .checkout-section .form-group label {
          display: inline-block;
          max-width: 100%;
          margin-bottom: 5px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

export default Checkout;
