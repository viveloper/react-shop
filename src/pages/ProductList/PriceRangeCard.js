import React, { useState, useEffect } from 'react';
import $ from 'jquery';

function PriceRangeCard() {
  const [minPrice, setMinPrice] = useState(250);
  const [maxPrice, setMaxPrice] = useState(450);

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

      <style jsx>{`
        .price-range-card .amount-wrapper input {
          background-color: transparent;
          border: 0;
          width: 48px;
          font-size: 14px;
          color: #252525;
          font-weight: 700;
          text-align: right;
        }
        .card-header {
          background: #1ab394;
          color: #fff;
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

export default PriceRangeCard;
