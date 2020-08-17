import React from 'react';
import NaviItem from './NaviItem';
import Logo from './Logo';
import TopBar from './TopBar';

function Navigation() {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0 flex-column align-items-stretch">
      <TopBar />
      <div className="container align-items-start menu">
        <Logo />
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <NaviItem to="#" text="Home" active />
            <NaviItem to="#" text="Products" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
