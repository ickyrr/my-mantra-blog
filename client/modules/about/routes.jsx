import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import About from './components/about.jsx';
export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/about', {
    name: 'about',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<About />)
      });
    }
  });
}
