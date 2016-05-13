import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import NewComment from '../components/new_comment.jsx';


export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  addComment: actions.comments.addComment,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewComment);
