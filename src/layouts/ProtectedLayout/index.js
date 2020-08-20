import React from 'react';
import { Redirect } from 'react-router-dom';
import PublicLayout from '@/layouts/PublicLayout';

function ProtectedLayout({ path, theme, component: Component, ...rest }) {
  // [TodDo] : Check Login
  const isAuth = true;

  if (!isAuth) {
    return <Redirect to="/home" />;
  }
  return <PublicLayout path={path} theme={theme} component={Component} {...rest} />;
}

export default ProtectedLayout;
