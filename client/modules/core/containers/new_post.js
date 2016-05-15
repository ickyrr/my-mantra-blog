import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewPost from '../components/new_post.jsx';

export const composer = ({context}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('NEW_POST_ERROR');
  onData(null, {error});
};

export const depsMapper = (context, actions) => ({
  newPost: actions.new_post.newPost,
  clearErrors: actions.new_post.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
