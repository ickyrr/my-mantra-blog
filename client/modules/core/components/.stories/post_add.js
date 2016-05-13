import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import PostAdd from '../post_add.jsx';

storiesOf('core.PostAdd', module)
  .add('default view', () => {
    return (
      <PostAdd create={action('add post')}/>
    );
  });
