import React from 'react';

const AccountsLayout = ({content = () => null}) => (
  <div>
    <div className="container">
      {content()}
    </div>
  </div>
);

export default AccountsLayout;
