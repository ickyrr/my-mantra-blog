import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PostList from '../components/post_list.jsx';
import Post from '/lib/collections/posts.js';

export const composer = ({context}, onData) => {
  // const {Meteor, Collections} = context();

  // // use the Astro Class instead of the actual collection
  const posts = Post.find({}, {sort: {createdAt: -1} }).fetch();
  onData(null, {posts});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostList);
