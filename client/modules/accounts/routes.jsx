import React from 'react';
import {mount} from 'react-mounter';

import AccountsLayout from './components/accounts_layout.jsx';

import Register from './containers/register.js';
import Login from './containers/login.js';

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
