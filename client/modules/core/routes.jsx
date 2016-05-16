import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import PostList from './containers/post_list.js';
import NewPost from './containers/new_post.js';
import ThePost from './containers/the_post.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'postlist',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });
  FlowRouter.route('/new-post', {
    name: 'newpost',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<NewPost />)
      });
    }
  });
  FlowRouter.route('/post/:postId', {
    name: 'post',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<ThePost postId={postId} />)
      });
    }
  });
}
