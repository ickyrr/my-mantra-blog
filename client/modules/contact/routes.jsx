import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Contact from './components/contact';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/contact', {
    name: 'contact',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Contact />)
      });
    }
  });
}
