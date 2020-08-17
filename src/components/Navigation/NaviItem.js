import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function NaviItem({ to, text, action, active }) {
  const onClickAnchor = (e) => {
    if (action) {
      e.preventDefault();
      e.stopPropagation();
      action();
    }
  };

  return (
    <>
      <li
        className={classNames('nav-item', {
          active,
        })}>
        <a href={to} onClick={onClickAnchor} className="nav-link">
          {text}
        </a>
      </li>
      <style jsx>
        {`
          .nav-item > .nav-link {
            color: #fff;
            font-family: 'Open Sans', helvetica, arial, sans-serif;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
          }
          .nav-link {
            padding-top: 25px;
            border-top: 6px solid transparent;
          }
          .nav-item.active > .nav-link,
          .nav-item.active > .nav-link:hover {
            background: transparent;
            color: #fff;
            border-top: 6px solid #1ab394;
          }
          .nav-item > .nav-link:hover {
            color: #1ab394;
          }
          .active > a:focus {
            background: transparent;
            color: #fff;
          }
        `}
      </style>
    </>
  );
}

NaviItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  action: PropTypes.func,
  show: PropTypes.bool,
};

export default NaviItem;
