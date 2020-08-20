import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Product from '@/components/Product';
import ProductCategory from './ProductCategory';
import PriceRangeCard from './PriceRangeCard';

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

  // [ToDo] : Filter products by price & category
  const filteredProducts = products.filter((product) => true);

  return (
    <main>
      <Breadcrumb pathName="products" />
      <section className="container sidbar">
        <div className="row">
          <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
            <ProductCategory />
            <PriceRangeCard />
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
  );
}

export default ProductList;
