import React from 'react';

const PostList = ({posts}) => (
    <div className="post-list">

      <section>
        <ul>
          {posts ? posts.map( (post) => (
            <li key={post._id}>
              <header>
                <h3><a href={`/post/${post._id}`}>{post.title}</a></h3>
              </header>
              <article>
                <p>{excerptize(post.content)}</p>
              </article>
            </li>
          )) : 'No Posts yet'}
        </ul>
      </section>
    </div>
);

const excerptize = (content) => {
  return content.substring(0,250) + '...';
};

export default PostList;
