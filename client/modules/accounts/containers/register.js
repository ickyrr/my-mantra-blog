import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Register from '../components/register.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('REGISTER_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  register: actions.users.register,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Register);
