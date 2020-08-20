import React from 'react';
import classNames from 'classnames';

function NavTabs({ tab, onTabClick }) {
  const handleTabClick = (e, tabName) => {
    e.preventDefault();
    e.stopPropagation();
    onTabClick(tabName);
  };

  return (
    <>
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
      <style jsx>{`
        /* tab */
        .nav-tabs {
          background-color: #f9f9f9;
          border-bottom: none;
        }

        .nav-tabs li > a {
          color: #646464;
          font-weight: 600;
          border-radius: 0;
        }
        .nav-tabs > li > a:hover {
          color: #5c90d2;
          background-color: transparent;
          border-color: transparent;
        }
        .nav-tabs > li > a.active,
        .nav-tabs > li > a.active:hover,
        .nav-tabs > li > a.active:focus {
          color: #646464;
          background-color: #fff;
          border-color: transparent;
        }

        .nav-tabs {
          background-color: transparent;
          border-bottom: 1px solid #e9e9e9;
        }
        .nav-tabs > li > a {
          -webkit-transition: all 0.15s ease-out;
          transition: all 0.15s ease-out;
        }
        .nav-tabs > li > a:hover {
          -webkit-box-shadow: 0 2px #5c90d2;
          box-shadow: 0 2px #5c90d2;
        }
        .nav-tabs li > a.active,
        .nav-tabs li > a.active:hover,
        .nav-tabs li > a.active:focus {
          -webkit-box-shadow: 0 2px #5c90d2;
          box-shadow: 0 2px #5c90d2;
        }
      `}</style>
    </>
  );
}

export default NavTabs;
