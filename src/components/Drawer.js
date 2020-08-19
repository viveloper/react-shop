import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Drawer({ isOpen, children }) {
  const open = () => {
    document.body.style.transform = 'translateX(-320px)';
  };

  const close = () => {
    document.body.style.transform = '';
  };

  useEffect(() => {
    document.body.style.transition = 'all 0.25s ease-out';
    if (isOpen) {
      open();
    } else {
      close();
    }
  }, [isOpen]);

  return (
    <>
      <div className="drawer">{children}</div>
      <style jsx>
        {`
          .drawer {
            position: fixed;
            width: 320px;
            right: -320px;
            top: 0;
            bottom: 0;
            max-width: 95%;
            z-index: 10;
            color: #333;
            background-color: #fff;
            border-left: none;
            box-shadow: 0 0px 36px 0 rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </>
  );
}

Drawer.propTypes = {
  isOpen: PropTypes.bool,
};

export default Drawer;
