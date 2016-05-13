import React from 'react';
import { storiesOf} from '@kadira/storybook';
import MainLayout from '../main_layout.jsx';

storiesOf('core.MainLayout', module)
  .add('default view', () => {
    const content = () => (<p>This is the content inside the Layout.</p>);
    return (
      <div className="container">
        <MainLayout content={content} />
      </div>
    );
  });
