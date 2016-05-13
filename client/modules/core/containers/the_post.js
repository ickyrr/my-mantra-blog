import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ThePost from '../components/the_post.jsx';
import Post from '/lib/collections/posts.js';

export const composer = ({context, postId}, onData) => {
  // const {Meteor, Collections} = context();
  const post = Post.findOne(postId);

  if (post) {
    onData(null, {post});
  }

};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ThePost);
