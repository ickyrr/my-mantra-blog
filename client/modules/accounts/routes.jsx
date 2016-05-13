import React from 'react';
import {mount} from 'react-mounter';

import AccountsLayout from '/client/modules/accounts/components/accounts_layout.jsx';
import Register from './components/register.jsx';
import Login from './components/login.jsx';

export default function (injectDeps, {FlowRouter}) {
  const AccountsLayoutCtx = injectDeps(AccountsLayout);

  FlowRouter.route('/register', {
    name: 'register',
    action() {
      mount(AccountsLayoutCtx, {
        content: () => (<Register />)
      });
    }
  });

  FlowRouter.route('/login', {
    name: 'login',
    action() {
      mount(AccountsLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
}
