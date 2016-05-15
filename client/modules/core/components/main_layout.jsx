import React from 'react';

import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <Navigation />
    </header>
    <div className="container">
      {content()}
    </div>
  </div>
);

export default Layout;
