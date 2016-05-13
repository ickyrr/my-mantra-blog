import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout.jsx';
import Home from './components/home.jsx';
import PostList from './containers/post_list.js';
import PostAdd from './containers/postadd.js';
import Contact from './components/contact.jsx';
import ThePost from './containers/the_post.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'home',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });

  FlowRouter.route('/blog', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostList />)
      });
    }
  });

  FlowRouter.route('/contact', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Contact />)
      });
    }
  });

  FlowRouter.route('/add-post', {
    action() {
      mount(MainLayoutCtx, {
        content: () => (<PostAdd />)
      });
    }
  });

  FlowRouter.route('/post/:postId', {
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<ThePost postId={postId}/>)
      });
    }
  });

}
