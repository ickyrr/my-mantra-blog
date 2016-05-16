import React from 'react';

const ThePost = ({post}) => (
  <div className="post-container">
    <header>
      <h3>{post.title}</h3>
    </header>
    <article>
      <p>{post.content}</p>
    </article>
  </div>
);

export default ThePost;
