import React from 'react';
import moment from 'moment';

import NewComment from '/client/modules/comments/containers/new_comment.js';
import CommentList from '/client/modules/comments/containers/comment_list.js';

const ThePost = ({post}) => (
  <div className="content-container">
    <header>
      <h1>{post.title}</h1>
      <small><i>{_formatDate(post.createdAt)}</i></small>
    </header>

    <article>
        <p>
          {post.content}
        </p>
    </article>

    <section>
      <NewComment postId={post._id}/>
      <CommentList postId={post._id}/>
    </section>
  </div>
);

const _formatDate = function (date) {
  return moment(date).calendar();
};

export default ThePost;
