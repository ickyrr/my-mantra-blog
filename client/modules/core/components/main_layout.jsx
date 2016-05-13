import React from 'react';
import Navigation from './navigation.jsx';

const Layout = ({content = () => null }) => (
  <div className="container">
    <header>
      <Navigation />
    </header>
    <div>
      {content()}
    </div>
  </div>
);

export default Layout;
