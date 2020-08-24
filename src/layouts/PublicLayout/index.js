/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';
import Drawer from '@/components/Drawer';
import Cart from './Cart';
import Footer from './Footer';
import Navitation from '@/components/Navigation';
import LoginModal from '@/components/modals/LoginModal';
import SignupModal from '@/components/modals/SignupModal';
import { useSelector } from 'react-redux';
import { selectIsShopingCartOpen } from '@/data/cart';
import { getModals } from '@/data/modal';

export default function PublicLayout(props) {
  const { component: Component, ...rest } = props;
  const isShopingCartOpen = useSelector(selectIsShopingCartOpen);
  const modals = useSelector(getModals);
  const modalComponents = {
    LoginModal,
    SignupModal,
  };

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <React.Fragment>
          <Drawer isOpen={isShopingCartOpen} component={Cart} />
          <Navitation stickyPaths={['/products', '/products/.*', '/checkout']} />
          <Component {...matchProps} />
          <Footer />
          {modals.map((v, i) => {
            const Modal = modalComponents[v.type];
            return <Modal key={v.type + ':' + i} show={true} />;
          })}
        </React.Fragment>
      )}></Route>
  );
}
