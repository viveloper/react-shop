import React from 'react';
import Navigation from '../components/Navigation';
import Product from '../components/Product';
import Banner from '../components/Banner';

function Home() {
  const product = {
    id: '1',
    name: 'React Note',
    price: 2000,
    info: 'Lorem ipsum dolor sit amet',
    avg_stars: 4,
    total_reviews: 200,
  };

  return (
    <>
      <Navigation />
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
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <Product {...product} />
            </div>
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
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card product">
                <img className="card-img-top" src="assets/images/products/item5.jpeg" alt="" />
                <div className="card-body text-center p-2">
                  <a href="" className="item-title">
                    Watches
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card product">
                <img className="card-img-top" src="assets/images/products/item6.jpeg" alt="" />
                <div className="card-body text-center p-2">
                  <a href="" className="item-title">
                    Clothes
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card product">
                <img className="card-img-top" src="assets/images/products/item7.jpeg" alt="" />
                <div className="card-body text-center p-2">
                  <a href="" className="item-title">
                    Shoes
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
              <div className="card product">
                <img className="card-img-top" src="assets/images/products/item10.jpeg" alt="" />
                <div className="card-body text-center p-2">
                  <a href="" className="item-title">
                    Gloves
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
