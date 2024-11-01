/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable prettier/prettier */
import { Spin } from 'antd';
import React, { Suspense } from 'react';
import { AuthenticationWrap } from './overview/style';

const AuthLayout = (WraperContent) => {
  return function () {
    return (
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <AuthenticationWrap style={{ backgroundImage: `url("${require('../../../static/img/admin-bg-light.png')}")` }}>
          <div className="ninjadash-authentication-wrap">
            <div className="ninjadash-authentication-brand">
              <img src={require(`../../../static/img/logo_dark.svg`).default} alt="" width={"250"} />
            </div>
            <WraperContent />
          </div>
        </AuthenticationWrap>
      </Suspense>
    );
  };
};

export default AuthLayout;
