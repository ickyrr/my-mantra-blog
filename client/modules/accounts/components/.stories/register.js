import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Register from '../register.jsx';

storiesOf('core.Register', module)
  .add('default view', () => {
    return (
      <Register newUser={action('register user')} />
    );
  })
  .add('firstname error', () => {
    return (
      <Register
        error='Please fill up firstname field'
        newUser={action('register user')}
      />
    );
  })
  .add('lastname error', () => {
    return (
      <Register
        error='Please fill up lastname field'
        newUser={action('register user')}
      />
    );
  })
  .add('password error', () => {
    return (
      <Register
        error='Password must be at least 6 characters'
        newUser={action('register user')}
      />
    );
  })
  .add('email error', () => {
    return (
      <Register
        error='Email is required'
        newUser={action('register user')}
      />
    );
  })
  ;
