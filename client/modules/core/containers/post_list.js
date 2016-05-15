import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import PostList from '../components/post_list.jsx';
import Post from '/lib/collections/posts.js';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const posts = Post.find().fetch();
  onData(null, {posts});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(PostList);
