import React from 'react';
import allImage from '@/assets/images/products/*.jpeg';
import Rating from './Rating';
import PropTypes from 'prop-types';

export default function Product({ product, onCartClick }) {
  const img = allImage[`item${product.id}`];
  const handleCartClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onCartClick(product);
  };
  return (
    <>
      <div className="product card">
        <div className="img-container">
          <img className="card-img-top" src={img} alt="" />
          <div className="img-options">
            <div className="img-options-content">
              <ul className="list-line mb-2 p-0" role="group">
                <li className="list-inline-item">
                  <a href="" className="btn btn-light">
                    <i className="fas fa-heart"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="" className="btn btn-light" onClick={handleCartClick}>
                    <i className="fas fa-shopping-cart"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="./product-detail.html" className="btn btn-light">
                    <i className="fas fa-eye"></i>
                  </a>
                </li>
              </ul>
              <div className="text-warning">
                <Rating total={5} value={product.avg_stars} />
                <span className="text-white">({product.total_reviews})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <a href="" className="item-title" href="">
              {product.name}
            </a>
            <h4 className="price pull-right">{product.price}</h4>
          </div>
          <p className="card-text">{product.info}</p>
        </div>
      </div>
      <style jsx global>{`
        .product {
          margin-bottom: 20px;
        }
        .product img {
          height: 176px;
        }

        .product .img-container {
          position: relative;
          overflow: hidden;
          z-index: 0;
          display: block;
        }
        .product .img-container .img-options {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          background-color: rgba(0, 0, 0, 0.6);
          opacity: 0;
          visibility: none;
        }
        .product:hover .img-options {
          opacity: 1;
          visibility: visible;
        }
        .product .img-container .img-options-content {
          position: absolute;
          top: 40%;
          right: 0;
          left: 0;
          text-align: center;
        }
        .product .price {
          color: #47bac1;
          font-size: 18px;
          font-weight: 300;
          margin-bottom: 0;
        }
        .product .item-title {
          font-size: 18px;
          color: #646464;
          line-height: 2;
        }
      `}</style>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
    avg_stars: PropTypes.number.isRequired,
    total_reviews: PropTypes.number.isRequired,
  }),
  onCartClick: PropTypes.func.isRequired,
};
