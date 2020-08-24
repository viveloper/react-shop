import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Product from '@/components/Product';
import BootstrapSlider from '@/components/BootstrapSlider';
import { connect } from 'react-redux';
import { selectProducts, selectCategories, getProducts } from '@/data/productList';

class ProductList extends React.Component {
  breadcrumbLinks = [{ to: '/home', name: 'Home' }, { name: 'Product List' }];

  state = {
    priceFilter: [1, 30],
    selectedCategory: 'all',
    sortType: '0',
  };

  componentDidMount() {
    this.props.fetchProducts();
  }

  handleOnSlide = (values) => {
    this.setState({
      priceFilter: values,
    });
  };

  handleCategoryClick = (id) => {
    this.setState({
      selectedCategory: id,
    });
  };

  handleSortTypeChange = (e) => {
    this.setState({
      sortType: e.target.value,
    });
  };

  getFilteredProducts(products) {
    const [min, max] = this.state.priceFilter;

    const filteredProducts = (this.state.selectedCategory === 'all'
      ? [...products]
      : products.filter((product) => product.category === parseInt(this.state.selectedCategory))
    ).filter((product) => product.price >= min * 1000 && product.price <= max * 1000);

    filteredProducts.sort((a, b) => {
      if (this.state.sortType === '0') {
        return parseInt(a.id) - parseInt(b.id);
      } else if (this.state.sortType === '1') {
        return b.total_reviews - a.total_reviews;
      } else if (this.state.sortType === '2') {
        return b.avg_stars - a.avg_stars;
      } else if (this.state.sortType === '3') {
        return parseInt(b.id) - parseInt(a.id);
      } else if (this.state.sortType === '4') {
        return b.price - a.price;
      }
    });

    return filteredProducts;
  }

  render() {
    const filteredProducts = this.getFilteredProducts(this.props.products);
    return (
      <React.Fragment>
        <main className="gray-bg">
          <Breadcrumb title="Product List" links={this.breadcrumbLinks} />
          <section className="container sidbar">
            <div className="row">
              <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div className="product-category-card card mb-3">
                  <div className="card-header">Product categories</div>
                  <div className="card-body list-group">
                    {this.props.categories.map((c) => (
                      <a
                        key={c.id}
                        className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                        onClick={() => this.handleCategoryClick(c.id)}>
                        {c.name} <span className="badge badge-secondary badge-pill">{c.counts}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="card price-range-card">
                  <div className="card-header">Filter by Price</div>
                  <div className="card-body">
                    <BootstrapSlider
                      min={1}
                      max={30}
                      step={1}
                      value={this.state.priceFilter}
                      onSlide={this.handleOnSlide}
                    />
                    <br />
                    <span className="amount-wrapper">
                      <span className="price-label">Price:</span>
                      <input type="text" id="price-min" readOnly value={`$ ${this.state.priceFilter[0]}`} />
                      <strong>-</strong>
                      <input type="text" id="price-max" readOnly value={`$ ${this.state.priceFilter[1]}`} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9">
                <div className="row filter-area mb-3">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <select
                      name="guiest_id1"
                      id="guiest_id1"
                      className="select-drop"
                      onChange={this.handleSortTypeChange}
                      value={this.state.sortType}>
                      <option value="0">Default sorting</option>
                      <option value="1">Sort by popularity</option>
                      <option value="2">Sort by rating</option>
                      <option value="3">Sort by newness</option>
                      <option value="4">Sort by price</option>
                    </select>
                  </div>
                </div>
                <div className="row items">
                  {filteredProducts.map((p) => (
                    <div key={p.id} className="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                      <Product {...p} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
        <style jsx>{`
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
        `}</style>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: selectCategories(state),
  products: selectProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(getProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
