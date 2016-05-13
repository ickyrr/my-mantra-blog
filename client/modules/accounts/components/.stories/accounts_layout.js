import React from 'react';
import { storiesOf} from '@kadira/storybook';
import AccountsLayout from '../accounts_layout.jsx';

storiesOf('core.AccountsLayout', module)
  .add('default view', () => {
    const content = () => (<p>This is the content inside the Accounts Layout.</p>);
    return (
      <div className="container">
        <AccountsLayout content={content} />
      </div>
    );
  });
