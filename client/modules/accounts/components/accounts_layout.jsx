import React from 'react';

const AccountsLayout = ({content = () => null}) => (
  <div className="container">
    <div>
      {content()}
    </div>
  </div>
);

export default AccountsLayout;
