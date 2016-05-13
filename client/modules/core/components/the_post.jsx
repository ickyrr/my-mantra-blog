import React from 'react';
import moment from 'moment';

const ThePost = ({post}) => (
  <div className="content-container">
    <header>
      <h1>{post.title}</h1>
      <small><i>{_formatDate(this.createdAt)}</i></small>
    </header>

    <article>
        <p>
          {post.content}
        </p>
    </article>
  </div>
);

const _formatDate = function (date) {
  return moment(date).calendar();
};

export default ThePost;
