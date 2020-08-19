import React, { useLayoutEffect } from 'react';
import NaviItem from './NaviItem';
import Logo from './Logo';
import TopBar from './TopBar';

function Navigation({ cartItemCounts, onCartClick }) {
  useLayoutEffect(() => {
    const docElem = document.documentElement;
    const header = document.querySelector('nav.navbar');
    let didScroll = false;
    const changeHeaderOn = 200;

    window.addEventListener('scroll', scrollEventListener, false);

    return () => {
      window.removeEventListener('scroll', scrollEventListener, false);
    };

    function scrollEventListener(event) {
      if (!didScroll) {
        didScroll = true;
        setTimeout(scrollPage, 250);
      }
    }

    function scrollPage() {
      const sy = scrollY();
      console.log(header);
      if (sy >= changeHeaderOn) {
        header.classList.add('navbar-scroll');
      } else {
        header.classList.remove('navbar-scroll');
      }
      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop;
    }
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0 flex-column align-items-stretch">
        <TopBar cartItemCounts={cartItemCounts} onCartClick={onCartClick} />
        <div className="container align-items-start menu">
          <Logo />
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <NaviItem to="/home" text="Home" />
              <NaviItem to="/products" text="Products" />
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* navbar-scroll 처리 */
        .navbar-scroll {
          background-color: #fff;
          border-color: #fff;
          padding-top: 0;
          padding-bottom: 5px;
          border-bottom: 1px solid #e7eaec;
          border-radius: 0;
        }
        .navbar-scroll > .active > a:focus {
          background: transparent;
          color: inherit;
        }
        .navbar-scroll .menu .navbar-nav .nav-item > a.nav-link,
        .navbar-scroll .menu .navbar-nav .nav-item.active > a.nav-link {
          color: #676a6c;
        }
        .navbar-scroll .menu .navbar-nav .nav-item a.nav-link:hover {
          color: #1ab394;
        }
        .navbar-scroll .navbar-nav > li > a {
          padding: 20px 10px;
        }
        .navbar.navbar-scroll .navbar-brand {
          margin-top: 15px;
          border-radius: 5px;
          font-size: 12px;
          padding: 10px;
          height: auto;
        }
      `}</style>
    </>
  );
}

export default Navigation;
