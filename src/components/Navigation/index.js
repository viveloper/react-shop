import React, { useLayoutEffect, useRef } from 'react';
import NaviItem from './NaviItem';
import Logo from './Logo';
import TopBar from './TopBar';

function Navigation({ theme, cartItemCounts, onCartClick }) {
  const navEl = useRef(null);

  useLayoutEffect(() => {
    if (theme === 'home') {
      navEl.current.classList.remove('navbar-scroll');

      const docElem = document.documentElement;
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
        if (sy >= changeHeaderOn) {
          navEl.current.classList.add('navbar-scroll');
        } else {
          navEl.current.classList.remove('navbar-scroll');
        }
        didScroll = false;
      }

      function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
      }
    } else {
      navEl.current.classList.add('navbar-scroll');
    }
  }, [theme]);

  return (
    <>
      <nav className="navbar navbar-expand-md fixed-top navbar-dark p-0 flex-column align-items-stretch" ref={navEl}>
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
        :global(.navbar-scroll) {
          background-color: #fff;
          border-color: #fff;
          padding-top: 0;
          padding-bottom: 5px;
          border-bottom: 1px solid #e7eaec;
          border-radius: 0;
        }
        :global(.navbar-scroll > .active > a:focus) {
          background: transparent;
          color: inherit;
        }
        :global(.navbar-scroll .menu .navbar-nav .nav-item > a.nav-link),
        :global(.navbar-scroll .menu .navbar-nav .nav-item.active > a.nav-link) {
          color: #676a6c;
        }
        :global(.navbar-scroll .menu .navbar-nav .nav-item a.nav-link:hover) {
          color: #1ab394;
        }
        :global(.navbar-scroll .navbar-nav > li > a) {
          padding: 20px 10px;
        }

        :global(.navbar-brand:hover),
        :global(.navbar-brand:focus) {
          background: #17a185;
          color: #fff;
        }
        :global(.navbar-brand) {
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

        :global(.navbar.navbar-scroll .navbar-brand) {
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
