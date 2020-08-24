import React, { useEffect } from 'react';
import Product from '../../components/Product';
import Banner from './Banner';
import Collection from './Category';
import WatchImg from '../../assets/images/products/item5.jpeg';
import ClothesImg from '../../assets/images/products/item6.jpeg';
import ShoesImg from '../../assets/images/products/item7.jpeg';
import GlovesImg from '../../assets/images/products/item10.jpeg';
import Gaurantees from './Gaurantees';
import { useSelector, useDispatch } from 'react-redux';
import { getNewArrivals, selectNewArrivals, selectFeaturedCollection } from '@/data/home';

export default function Home() {
  const newArrivals = useSelector(selectNewArrivals);
  const categories = useSelector(selectFeaturedCollection);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewArrivals());
  }, []);

  const handleProductCartClicked = (product) => {
    this.props.onAddCartItem(product);
  };

  return (
    <main>
      <Banner />
      <section className="new-arrivals container">
        <div className="row copy">
          <div className="col-12 text-center mt-5">
            <div className="navy-line"></div>
            <h1>NEW ARRIVALS</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="row items">
          {newArrivals.map((product) => (
            <div key={product.id} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <Product {...product} onCartBtnClick={handleProductCartClicked} />
            </div>
          ))}
        </div>
      </section>
      <section className="featured-collection container my-5">
        <div className="row copy">
          <div className="col-12 text-center">
            <div className="navy-line"></div>
            <h1>FEATURED COLLECTION</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="row">
          {categories.map((c) => (
            <div key={c.id} className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <Collection name={c.name} to={c.to} alt={c.name} img={c.img} />
            </div>
          ))}
        </div>
      </section>

      <section className="explore flex-fill bg-light my-5 py-4 text-center">
        <h3 className="mb-3">
          Over <strong>50.000</strong> digital products!
        </h3>
        <a className="btn btn-rounded btn-noborder btn-lg btn-primary" href="#products">
          Explore Store <i className="fas fa-arrow-right"></i>
        </a>
      </section>

      <Gaurantees />
    </main>
  );
}
