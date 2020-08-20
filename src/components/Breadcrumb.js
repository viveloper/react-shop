import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ pathName }) {
  const pathList = [
    {
      id: 0,
      to: '/home',
      name: 'home',
      displayName: 'home',
    },
    {
      id: 1,
      to: '/products',
      name: 'products',
      displayName: 'product list',
    },
    {
      id: 2,
      to: '/products/:id',
      name: 'productDetail',
      displayName: 'product detail',
    },
  ];

  const currentPath = useMemo(() => pathList.find((path) => path.name === pathName), [pathName]);

  return (
    <>
      <section className="breadcrumb-wrapper mb-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="page-title">
                <h2>Product List</h2>
              </div>
            </div>
            <div className="col-6">
              <ol className="breadcrumb justify-content-end align-items-center">
                {pathList
                  .filter((path) => path.id <= currentPath.id)
                  .map((path) =>
                    path.name !== pathName ? (
                      <li key={path.name} className="breadcrumb-item">
                        <Link to={path.to}>{path.displayName}</Link>
                      </li>
                    ) : (
                      <li key={path.name} className="breadcrumb-item active">
                        {path.displayName}
                      </li>
                    )
                  )}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* breadcrumb */
        .breadcrumb-wrapper {
          padding-top: 108px;
          background: #ffffff;
        }
        .breadcrumb-wrapper ol.breadcrumb {
          background-color: transparent;
          margin-bottom: 0;
          padding: 0;
        }
        .breadcrumb-wrapper .page-title h2 {
          color: #797979;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 0;
        }
        .breadcrumb-wrapper ol.breadcrumb .active {
          color: #252525;
          text-transform: uppercase;
        }
        .breadcrumb-wrapper ol.breadcrumb li :global(a) {
          text-transform: uppercase;
          color: #969696;
        }

        @media (min-width: 480px) {
          .breadcrumb-wrapper ol.breadcrumb {
            float: right !important;
            min-height: 70px;
          }
        }

        @media (min-width: 480px) {
          .breadcrumb-wrapper ol.breadcrumb li {
            font-size: 9px;
            line-height: 15px;
          }
        }

        @media (min-width: 768px) {
          .breadcrumb-wrapper ol.breadcrumb li {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}

export default Breadcrumb;
