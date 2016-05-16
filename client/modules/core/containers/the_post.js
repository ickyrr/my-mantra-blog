import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import ThePost from '../components/the_post.jsx';

import Post from '/lib/collections/posts.js';

export const composer = ({context, postId}, onData) => {
  const post = Post.findOne(postId);

  onData(null, {post});
};

export const depsMapper = (context) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(ThePost);
