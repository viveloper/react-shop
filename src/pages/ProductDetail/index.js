import React, { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Product from '@/components/Product';
import allImage from '@/assets/images/products/*.jpeg';
import classNames from 'classnames';

function ProductDetail({ match, onAddCartItem }) {
  const { id } = match.params;
  const img = allImage[`item${id}`];

  const [tab, setTab] = useState('info');
  const [quantity, setQuantity] = useState(1);

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

  const product = useMemo(() => products.find((item) => item.id === id), [id]);
  const relatedProduct = useMemo(() => products.find((item) => parseInt(item.id) === (parseInt(id) % 4) + 1), [id]);

  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    e.stopPropagation();
    setTab(tabName);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <main className="gray-bg">
        <Breadcrumb pathName="productDetail" />
        <section className="container product-info p-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="media">
                <img src={img} alt="Image" />
                <div className="media-body">
                  <h2 className="mt-0">{product.name}</h2>
                  <h3>{product.price}</h3>
                  <p className="mb-2">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto obcaecati inventore dolorum,
                      itaque repellat ab laudantium aspernatur accusamus ex assumenda harum rerum in quaerat illum
                      dignissimos alias eos soluta ipsum!
                    </span>
                    <br />
                    <span className="product-category mt-5">
                      Category:
                      <a className="navy-link" href="/products.html?categorie=note" rel="tag">
                        Note
                      </a>
                    </span>
                  </p>
                  <div className="btn-area mb-5">
                    <div className="quantity_select">
                      <select
                        name="quantity"
                        title="Qty"
                        className="qty"
                        value={quantity}
                        onChange={handleQuantityChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                    </div>
                    <a href="#" className="btn btn-primary btn-block">
                      Add to cart <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                  <div>
                    {/* Nav tabs */}
                    <ul className="nav nav-tabs nav-tabs-alt" role="tablist">
                      <li role="presentation" className="nav-item">
                        <a
                          className={classNames('nav-link', { active: tab === 'info' })}
                          href="#info"
                          aria-controls="info"
                          role="tab"
                          data-toggle="tab"
                          onClick={(e) => handleTabClick(e, 'info')}>
                          Info
                        </a>
                      </li>
                      <li role="presentation" className="nav-item">
                        <a
                          className={classNames('nav-link', { active: tab === 'review' })}
                          href="#review"
                          aria-controls="review"
                          role="tab"
                          data-toggle="tab"
                          onClick={(e) => handleTabClick(e, 'review')}>
                          Reviews
                        </a>
                      </li>
                      <li role="presentation" className="nav-item">
                        <a
                          className={classNames('nav-link', { active: tab === 'shipping' })}
                          href="#shipping"
                          aria-controls="shipping"
                          role="tab"
                          data-toggle="tab"
                          onClick={(e) => handleTabClick(e, 'shipping')}>
                          Shipping
                        </a>
                      </li>
                    </ul>

                    {/* Tab panes */}
                    <div className="tab-content mt-3">
                      <div role="tabpanel" className={classNames('tab-pane', { active: tab === 'info' })} id="info">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae aliquid, aut, pariatur
                          maiores eius blanditiis minus vitae nostrum quidem, dolorem minima rerum ratione. Tenetur
                          assumenda repellat aut, ea animi distinctio.
                        </p>
                        <ul>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>consectetur adipisicing elit</li>
                        </ul>
                      </div>
                      <div role="tabpanel" className={classNames('tab-pane', { active: tab === 'review' })} id="review">
                        <div className="text-center">
                          <p className="h2 text-warning">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </p>
                          <p>
                            <strong>5.0</strong>/5.0 out of <strong>5</strong> Ratings
                          </p>
                        </div>
                      </div>
                      <div
                        role="tabpanel"
                        className={classNames('tab-pane', { active: tab === 'shipping' })}
                        id="shipping">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius repudiandae culpa soluta sit,
                        recusandae nulla veniam exercitationem consequatur ratione accusantium facere vel, magni
                        laudantium, vero non minus quas cupiditate asperiores.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="related-products container mt-4">
          <div className="row copy">
            <div className="col-lg-12 text-center">
              <div className="navy-line"></div>
              <h1>Related Products</h1>
            </div>
          </div>
          <div className="row items">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <Product product={relatedProduct} onCartClick={onAddCartItem} />
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        /* product-info */
        .product-info {
          background-color: #fff;
          -webkit-box-shadow: 0 2px rgba(0, 0, 0, 0.01);
          box-shadow: 0 2px rgba(0, 0, 0, 0.01);
        }

        @media (max-width: 479px) {
          .product-info .media img {
            width: 100%;
            padding: 0 0 30px 0;
          }
        }
        @media (min-width: 480px) {
          .product-info .media im {
            width: 100%;
            padding: 0 0 30px 0;
          }
        }
        @media (min-width: 768px) {
          .product-info .media img {
            width: 100%;
            padding: 0 0 30px 0;
          }
        }
        @media (min-width: 992px) {
          .product-info .media img {
            width: 489px;
            padding: 0 30px 0 0;
          }
        }

        .product-info .media img {
          display: block;
          max-width: 100%;
          height: auto;
        }

        .product-info .media .media-body h2 {
          font-weight: 700;
          margin-bottom: 7px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #252525;
          margin-top: 0;
        }
        .product-info .product-category {
          display: block;
        }
        @media (max-width: 479px) {
          .product-info .media .media-body {
            display: block;
            width: 100%;
          }
        }

        @media (min-width: 480px) {
          .product-info .media .media-body {
            display: block;
            width: 100%;
          }
        }

        @media (min-width: 992px) {
          .product-info .media .media-body {
            display: table-cell;
          }
        }

        .product-info .media .media-body h3 {
          font-weight: 700;
          margin-bottom: 7px;
          letter-spacing: 1px;
          color: #252525;
          margin-bottom: 26px;
        }

        .product-info .media .media-body p {
          line-height: 24px;
          color: #797979;
        }

        .product-info .media .media-body .btn-area {
          font-weight: 400;
          font-size: 13px;
          text-transform: uppercase;
        }

        .product-info .media .media-body .btn-area .btn-primary {
          width: 196px;
          height: 55px;
          border-radius: 0;
          border: none;
          background-color: #1ab394;
          padding: 0 20px;
          line-height: 55px;
          position: relative;
          text-align: left;
          letter-spacing: 0.5px;
          vertical-align: top;
          display: inline-block;
        }

        @media (min-width: 1280px) {
          div.quantity_select {
            width: 70px !important;
            background-position: 50px !important;
          }
        }
        .product-info .quantity_select {
          width: 60px;
          overflow: hidden;
          background-color: #fff;
          background-image: url(assets/images/down_arrow.png);
          background-repeat: no-repeat;
          background-position: 40px;
          border: 2px solid #e2e2e2;
          border-radius: 2px;
          height: 55px;
          display: inline-block;
          margin-right: 20px;
        }
        .product-info .qty {
          background: none repeat scroll 0% 0% transparent;
          width: 80px;
          padding: 5px;
          border: none;
          height: 52px;
          text-transform: uppercase;
          cursor: pointer;
          padding-left: 16px;
        }
        .product-info .qty:focus {
          outline: none;
        }

        /* tab */
        .product-info .nav-tabs {
          background-color: #f9f9f9;
          border-bottom: none;
        }

        .product-info .nav-tabs li > a {
          color: #646464;
          font-weight: 600;
          border-radius: 0;
        }
        .product-info .nav-tabs > li > a:hover {
          color: #5c90d2;
          background-color: transparent;
          border-color: transparent;
        }
        .product-info .nav-tabs > li > a.active,
        .product-info .nav-tabs > li > a.active:hover,
        .product-info .nav-tabs > li > a.active:focus {
          color: #646464;
          background-color: #fff;
          border-color: transparent;
        }

        .product-info .nav-tabs {
          background-color: transparent;
          border-bottom: 1px solid #e9e9e9;
        }
        .product-info .nav-tabs > li > a {
          -webkit-transition: all 0.15s ease-out;
          transition: all 0.15s ease-out;
        }
        .product-info .nav-tabs > li > a:hover {
          -webkit-box-shadow: 0 2px #5c90d2;
          box-shadow: 0 2px #5c90d2;
        }
        .product-info .nav-tabs li > a.active,
        .product-info .nav-tabs li > a.active:hover,
        .product-info .nav-tabs li > a.active:focus {
          -webkit-box-shadow: 0 2px #5c90d2;
          box-shadow: 0 2px #5c90d2;
        }
        .product-info .tab-content {
          padding: 20px 20px 1px;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

export default ProductDetail;
