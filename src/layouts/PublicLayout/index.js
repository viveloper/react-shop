/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import Drawer from '@/components/Drawer';
import Cart from './Cart';
import Footer from './Footer';
import Navitation from '@/components/Navigation';
import { useSelector } from 'react-redux';
import { selectIsShopingCartOpen } from '@/data/cart';

export default function PublicLayout(props) {
  const { component: Component, ...rest } = props;
  const isShopingCartOpen = useSelector(selectIsShopingCartOpen);

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <React.Fragment>
          <Drawer isOpen={isShopingCartOpen} component={Cart} />
          <Navitation stickyPaths={['/products', '/products/.*', '/checkout']} />
          <Component {...matchProps} />
          <Footer />
        </React.Fragment>
      )}></Route>
  );
}
