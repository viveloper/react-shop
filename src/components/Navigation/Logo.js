import React from 'react';

function Logo() {
  return (
    <>
      <a className="navbar-brand" href="#">
        Fast Shop
      </a>
      <style jsx>{`
        .navbar-brand:hover,
        .navbar-brand:focus {
          background: #17a185;
          color: #fff;
        }
        .navbar-brand {
          color: #fff;
          height: auto;
          display: block;
          font-size: 14px;
          background: #1ab394;
          padding: 15px 20px 15px 20px;
          border-radius: 0 0px 5px 5px;
          font-weight: 700;
          transition: all 0.3s ease-in-out 0s;
        }
      `}</style>
    </>
  );
}

export default Logo;
