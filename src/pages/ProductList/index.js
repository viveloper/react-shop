import React, { useState, useEffect, useRef } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Product from '@/components/Product';
import $ from 'jquery';

function ProductList({ onAddCartItem }) {
  // [ToDo] : Fetch Redux Store
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'React Note',
      price: 2000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 4,
      total_reviews: 200,
    },
    {
      id: '2',
      name: 'React Product 2',
      price: 13000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 4,
      total_reviews: 5,
    },
    {
      id: '3',
      name: 'React Product 3',
      price: 4000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 2,
      total_reviews: 10,
    },
    {
      id: '4',
      name: 'React Product 4',
      price: 5000,
      info: 'Lorem ipsum dolor sit amet',
      avg_stars: 1,
      total_reviews: 10,
    },
  ]);

  const [minPrice, setMinPrice] = useState(250);
  const [maxPrice, setMaxPrice] = useState(450);

  // [ToDo] : Filter products by price & category
  const filteredProducts = products.filter((product) => true);

  useEffect(() => {
    const slider = $('input.price-range').slider({});
    const priceMinEl = $('input#price-min');
    const priceMaxEl = $('input#price-max');
    const currentPrice = slider.slider('getValue');
    const currency = '$';
    priceMinEl.val(`${currency} ${currentPrice[0]}`);
    priceMaxEl.val(`${currency} ${currentPrice[1]}`);

    slider.on('slide', (v) => {
      const min = v.value[0];
      const max = v.value[1];
      priceMinEl.val(`${currency} ${min}`);
      priceMaxEl.val(`${currency} ${max}`);
      setMinPrice(min);
      setMaxPrice(max);
    });
  }, []);

  return (
    <>
      <main>
        <Breadcrumb pathName="products" />
        <section className="container sidbar">
          <div className="row">
            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
              <div className="product-category-card card mb-3">
                <div className="card-header">Product categories</div>
                <div className="card-body list-group">
                  <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Shirts <span className="badge badge-secondary badge-pill">2</span>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Watches<span className="badge badge-secondary badge-pill">2</span>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Clothes <span className="badge badge-secondary badge-pill">3</span>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    GLoves <span className="badge badge-secondary badge-pill">18</span>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Shoes <span className="badge badge-secondary badge-pill">2</span>
                  </a>
                  <a className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    Notes <span className="badge badge-secondary badge-pill">12</span>
                  </a>
                </div>
              </div>
              <div className="card price-range-card">
                <div className="card-header">Filter by Price</div>
                <div className="card-body">
                  <input
                    type="text"
                    className="price-range"
                    data-slider-min="10"
                    data-slider-max="1000"
                    data-slider-step="5"
                    data-slider-value="[250,450]"
                  />
                  <br />
                  <span className="amount-wrapper">
                    <span className="price-label">Price:</span>
                    <input type="text" id="price-min" readOnly="" />
                    <strong>-</strong>
                    <input type="text" id="price-max" readOnly="" />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
              <div className="row filter-area mb-3">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <select name="guiest_id1" id="guiest_id1" className="select-drop">
                    <option value="0">Default sorting</option>
                    <option value="1">Sort by popularity</option>
                    <option value="2">Sort by rating</option>
                    <option value="3">Sort by newness</option>
                    <option value="3">Sort by price</option>
                  </select>
                </div>
              </div>
              <div className="row items">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <Product product={product} onCartClick={onAddCartItem} />
                  </div>
                ))}
              </div>
              <div className="row items"></div>
            </div>
          </div>
        </section>
      </main>
      <style jsx>{`
        /* sidbar */
        .sidbar .card {
          margin-bottom: 16px;
        }
        .sidbar .product-category-card .card-body {
          padding: 0;
        }
        .sidbar .card-body .list-group-item {
          border: none;
        }
        .sidbar .card-header {
          background: #1ab394;
          color: #fff;
        }
        .list-group-item {
          font-weight: 400;
          color: #646464;
        }

        .price-range-card .amount-wrapper input {
          background-color: transparent;
          border: 0;
          width: 48px;
          font-size: 14px;
          color: #252525;
          font-weight: 700;
          text-align: right;
        }
        :global(.slider.slider-horizontal) {
          width: 100%;
        }
        :global(.price-range-card .slider-handle) {
          background-image: none;
          border: 3px solid #1ab394;
          background-color: #ffffff;
        }
        :global(.price-range-card .slider-selection) {
          background-color: #1ab394;
          background-image: none;
        }
      `}</style>
    </>
  );
}

export default ProductList;
