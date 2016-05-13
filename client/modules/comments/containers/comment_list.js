import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import CommentList from '../components/comment_list.jsx';
import Comment from '/lib/collections/comments.js';

export const composer = ({context, postId}, onData) => {
  // const {Meteor, Collections} = context();
  const comments = Comment.find({'postId': postId}).fetch();
  onData(null, {comments});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(CommentList);
