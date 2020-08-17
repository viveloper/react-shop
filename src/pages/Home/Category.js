import React from 'react';

function Category({ name, img, to, alt }) {
  return (
    <div className="card product">
      <img className="card-img-top" src={img} alt={alt} />
      <div className="card-body text-center p-2">
        <a href={to} className="item-title">
          {name}
        </a>
      </div>
    </div>
  );
}

export default Category;
