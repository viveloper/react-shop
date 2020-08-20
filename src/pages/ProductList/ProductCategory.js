import React from 'react';

function ProductCategory() {
  return (
    <>
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

      <style jsx>{`
        .card {
          margin-bottom: 16px;
        }
        .product-category-card .card-body {
          padding: 0;
        }
        .card-body .list-group-item {
          border: none;
        }
        .card-header {
          background: #1ab394;
          color: #fff;
        }
        .list-group-item {
          font-weight: 400;
          color: #646464;
        }
      `}</style>
    </>
  );
}

export default ProductCategory;
